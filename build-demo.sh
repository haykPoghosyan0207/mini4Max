for DEMO in "${DEMOS[@]}"; do
  DEMO_PATH="src/components/DemoVersion/$DEMO"
  DEST_PATH="public/demo/$DEMO"

  CUR_DIR=$(pwd)

  echo "🛠️ === Կառուցում ենք demo-ն՝ $DEMO ==="

  if [ ! -d "$DEMO_PATH" ]; then
    echo "❌ Թղթապանակը չի գտնվել՝ $DEMO_PATH"
    continue
  fi

  cd "$DEMO_PATH" || { echo "❌ Չհաջողվեց մտնել $DEMO_PATH"; continue; }

  echo "🔧 Տեղադրում ենք dependency-ները..."
  npm install

  # BASE_PATH-ը հստակ ցույց տուր ըստ demo-ի
  if [ "$DEMO" = "clothersShop" ]; then
    BASE_PATH="/demo/clothersShop/"
  elif [ "$DEMO" = "jewelry" ]; then
    BASE_PATH="/demo/jewelry/"
  else
    BASE_PATH="/"
  fi

  echo "⚒️ Կառուցում ենք production տարբերակը՝ BASE_PATH=$BASE_PATH..."

  BASE_PATH=$BASE_PATH npm run build || { echo "❌ Build-ի ժամանակ սխալ եղավ $DEMO-ում"; cd "$CUR_DIR"; continue; }

  cd "$CUR_DIR"

  echo "🧹 Մաքրում ենք հին թղթապանակը ($DEST_PATH)..."
  rm -rf "$DEST_PATH"
  mkdir -p "$DEST_PATH"

  echo "📦 Պատճենում ենք dist-ի բովանդակությունը..."
  cp -r "$DEMO_PATH/dist/"* "$DEST_PATH/"

  echo "✅ $DEMO demo-ն հաջողությամբ ավելացվեց։ Հասցեն՝ /demo/$DEMO/index.html"
  echo
done

echo "🎉 Բոլոր demo-ների կառուցումն ավարտված է։"
