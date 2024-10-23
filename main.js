// 商品リスト
const products = [
  { id: 1, name: '煮干しラーメンセット(3食)', price: 2400, popularity: 2 },
  { id: 2, name: '濃厚煮干しラーメンセット(3食)', price: 2400, popularity: 3 },
  { id: 3, name: '濃厚煮干しラーメン灰セット(3食)', price: 2700, popularity: 5 },
  { id: 4, name: '煮干しラーメン食べ比べセット(3食)', price: 2500, popularity: 1 },
  { id: 5, name: '煮干しラーメンセット(6食)', price: 4600, popularity: 6 },
  { id: 6, name: '濃厚煮干しラーメンセット(6食)', price: 4600, popularity: 8 },
  { id: 7, name: '濃厚煮干しラーメン灰セット(6食)', price: 5400, popularity: 9 },
  { id: 8, name: '煮干しラーメン食べ比べセット(6食)', price: 4800, popularity: 4 },
  { id: 9, name: '煮干しラーメン スープのみ(3袋)', price: 1500, popularity: 7 },
  { id: 10, name: '濃厚煮干しラーメン スープのみ(3袋)', price: 1500, popularity: 10 },
  { id: 11, name: '煮干しラーメン 灰 スープのみ(3袋)', price: 1800, popularity: 12 },
  { id: 12, name: '麺のみ(3袋)', price: 900, popularity: 11 },
];

const product_lists = [...products];


// 商品を表示する関数
const displayProduct = product => {
  const product_container = document.getElementById('product-container');
  product_container.innerHTML = '';  //表示する商品を初期化

  product.forEach(product => {
    const product_item = document.createElement('div');
    product_item.classList.add('product-item');
    // 商品を表示
    product_item.innerHTML = `
    <div class="product-item__img">
      <a href="#">
        <img src="./img/300x300.png" alt="${product.name}">
      </a>
    </div>
    <h3 class="product-name">
      <a href="#">${product.name}</a>
    </h3>
    <span class="product-price">${product.price.toLocaleString('ja-jp', { style: 'currency', currency: 'JPY' })}</span>
    `;
    product_container.appendChild(product_item);
  });
}

// 並べ替えをする処理
document.getElementById('sort-select').addEventListener('change', (e) => {
  const sort_value = e.target.value;
  const sorted_products = [...products];  //※元配列の変更防止
  // 並べ替えの判定
  if (sort_value === 'def-order') {
    // 通常順にソート
    sorted_products.sort((a, b) => a.id - b.id);  //※アロー関数が一文であるため、returnは省略できる
  } else if (sort_value === 'rec-order') {
    // 人気順にソート
    sorted_products.sort((a, b) => a.popularity - b.popularity);
  } else if (sort_value === 'price-asc') {
    // 昇順にソート
    sorted_products.sort((a, c) => a.price - c.price);
  } else if (sort_value === 'price-desc') {
    // 降順にソート
    sorted_products.sort((a, c) => c.price - a.price);
  } else if (sort_value === '') {
    return;
  }
  displayProduct(sorted_products);
});

// 商品数を表示する関数
const howManyProducts = () => {
  const product_total = document.getElementsByClassName('product-item').length;
  document.getElementById('display-number').textContent = `${product_total}商品`;
}

// 商品を検索
document.getElementById('search').addEventListener('input', (e) => {
  const search_value = e.target.value.toLowerCase();
  const filtered_products = products.filter(product => product.name.toLocaleLowerCase().includes(search_value));

  displayProduct(filtered_products);
  howManyProducts();
});

// 関数宣言
displayProduct(products);
howManyProducts();