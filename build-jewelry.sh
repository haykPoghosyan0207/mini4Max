#!/bin/bash

DEMOS=("clothersShop" "jewelry")

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

  echo "🔧 Տեղադրում dependency-ները..."
  npm install

  if [ "$DEMO" = "clothersShop" ]; then
    BASE_PATH="/demo/clothersShop/"
  elif [ "$DEMO" = "jewelry" ]; then
    BASE_PATH="/demo/jewelry/"
  else
    BASE_PATH="/"
  fi

  echo "⚒️ Կառուցում ենք production տարբերակը՝ BASE_PATH=$BASE_PATH..."

  BASE_PATH=$BASE_PATH npm run build || { echo "❌ Build error $DEMO-ում"; cd "$CUR_DIR"; continue; }

  cd "$CUR_DIR"

  echo "🧹 Մաքրում հին թղթապանակը $DEST_PATH..."
  rm -rf "$DEST_PATH"
  mkdir -p "$DEST_PATH"

  echo "📦 Պատճենում ենք dist-ի բովանդակությունը $DEST_PATH..."
  cp -r "$DEMO_PATH/dist/"* "$DEST_PATH/"

  echo "✅ $DEMO demo-ն պատրաստ է՝ /demo/$DEMO/index.html"
  echo
done

echo "🎉 Բոլոր demo-ները կառուցված են։"
