const github_id = "Sonu-kumar-web";
const github_repo = "db";
const add_products = `https://my-json-server.typicode.com/${github_id}/${github_repo}/products`;
const delete_products = add_products;
const add_cart_products = `https://my-json-server.typicode.com/${github_id}/${github_repo}/carts`;
const delete_cart_products = add_cart_products;
const update_quantity = add_cart_products;
const get_products = add_products;
const APIUrls = {
   add_products,
   delete_products,
   add_cart_products,
   delete_cart_products,
   update_quantity,
   get_products,
};

export default APIUrls;
