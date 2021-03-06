#!/usr/bin/env bash
# this is a DEV script
#
# use this DEV script to fully build the bundle with dev config
export VERSION="1.1.0"
export API_ROOT="http://localhost:8080"

export API_PRODUCTS="https://gundulf-products.herokuapp.com/api/products"
export API_ITEMS="https://gundulf-products.herokuapp.com/api/items"
export API_ORDERS="https://gundulf-orders.herokuapp.com/api/orders"

set -e
set -o pipefail

npm run build-dev
mvn clean install
java -Dserver.port=$PORT -Dspring.profiles.active=dev $JAVA_OPTS -jar target/gundulf-$VERSION.jar
