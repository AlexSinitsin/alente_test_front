<template>
  <div class="product tails">
    <div class="content">
      <div class="img">
        <img :src="paramProdProps.image" :alt="'img' + paramProdProps.id">
      </div>
      <div class="rating_and_price">
        <div class="rating_product">{{paramProdProps.rating}}</div>
        <div class="price">{{'$' + paramProdProps.price}}</div>
      </div>
      <div class="title">{{paramProdProps.title}}</div>
      <div class="desc">{{paramProdProps.desc}}</div>
    </div>
    <div class="buttons">
      <a class="wish"><span>WISHLIST</span></a>
      <a class="add"><span>ADD TO CART</span></a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['paramProdProps']
  }

</script>

<style>
  .product {
    width: 370px;
    height: 485px;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    margin-bottom: 28px;
    margin-right: 30px; 
  }
  .product:nth-child(3n) {
    margin-right: 0px; 
  }

  .content {
    padding: 30px 22px 0px;
  }

  .img {
    display: flex;
    width: 100%;
    height: 273px;
    justify-content: center;
    align-items: center;
    margin-bottom: 35px;
  }

  .rating_and_price {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .rating_product {
    width: 63px;
    height: 30px;
    background: #6F64F8;
    border-radius: 3px;
    line-height: 30px;
    padding-left: 10px;
    font-weight: normal;
    font-size: 14px;
    color: #FFFFFF;
    position: relative;

  }

  .rating_product:before {
    content: '';
    display: block;
    position: absolute;
    width: 15px;
    height: 14px;
    top: 7px;
    right: 10px;
    background: url("data:image/svg+xml,%3Csvg width='15' height='14' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.69751 1L9.64065 4.94953L13.986 5.58675L10.8418 8.65931L11.5838 13L7.69751 10.9495L3.81123 13L4.55327 8.65931L1.40903 5.58675L5.75437 4.94953L7.69751 1V1Z' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat;
  }

  .price {
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
  }

  .title {
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }

  .desc {
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
  }

  .buttons {
    display: flex;
  }

  .buttons a {
    display: block;
    width: 50%;
    font-weight: 600;
    font-size: 14px;
    line-height: 45px;
    height: 45px;
    cursor: pointer;
  }

  .buttons a:hover {
    text-decoration: none;
    color: #2C2C2C;
  }

  .buttons a span {
    cursor: pointer;
    position: relative;
    font-weight: 600;
    font-size: 14px;
    display: inline-block;
  }

  .wish {
    background: #EDEDED;
    text-align: center;
  }

  .wish:hover {
    background: #CCC;
  }

  .wish span {
    padding-left: 20px;
  }

  .wish span:before {
    content: '';
    display: block;
    position: absolute;
    width: 14px;
    height: 13px;
    top: 16px;
    left: 0px;
    background-size: 100%;
    background: url("data:image/svg+xml,%3Csvg width='14' height='13' viewBox='0 0 17 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.7054 2.14929C13.9814 1.41343 12.9991 1 11.9748 1C10.9506 1 9.96828 1.41343 9.2442 2.14929L8.50012 2.90512L7.75604 2.14929C6.24796 0.61741 3.80287 0.617411 2.29479 2.14929C0.786706 3.68118 0.786706 6.16485 2.29479 7.69674L3.03887 8.45256L8.50012 14L13.9614 8.45256L14.7054 7.69674C15.4299 6.96122 15.8369 5.96344 15.8369 4.92302C15.8369 3.88259 15.4299 2.88481 14.7054 2.14929Z' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat;
  }

  .add {
    font-weight: 600;
    font-size: 14px;
    line-height: 45px;
    background: #6F64F8;
    text-align: center;
  }

  .add:hover {
    background: #4F45BF;
  }

  .add span {
    color: white;
    padding-left: 25px;
  }

  .add span:before {
    content: '';
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 14px;
    left: 0px;
    background-size: 100%;
    background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.737212' fill-rule='evenodd' clip-rule='evenodd' d='M4.03651 1L1.24162 4.6V17.2C1.24162 18.1941 2.07583 19 3.10488 19H16.1477C17.1767 19 18.011 18.1941 18.011 17.2V4.6L15.2161 1H4.03651Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath opacity='0.737212' d='M1.24162 5.5H18.011' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath opacity='0.737212' d='M13.8186 9C13.8186 10.6569 12.1763 12 10.1503 12C8.12439 12 6.48204 10.6569 6.48204 9' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat;
  }

</style>
