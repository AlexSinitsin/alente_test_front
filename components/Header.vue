<template>
  <div class="row row-sm header">
    <div class="col-sm-6 col-xl-6">
      <div><a href="#" class="mail"><img src="img/mail.svg" alt="mail"></a></div>
      <div><a href="#" class="cal"><img src="img/calendar.svg" alt="calendar"></a></div>
      <div><a href="#" class="like"><img src="img/star.svg" alt="star"></a></div>
    </div>
    <div class="col-sm-6 col-xl-6">
      <div><a href="#" class="bell"><img src="img/bell.svg" alt="ball"></a></div>
      <div><a href="#" class="search"><img src="img/search.svg" alt="search"></a></div>
      <div>
        <div class="user">
          <p class="name">John Doe</p>
          <p class="access">Available</p>
        </div>
      </div>
      <div> <img src="img/Oval.png" alt="img_user" class="img_user"></div>
    </div>
  </div>
</template>
<script>
  export default {
    
  }

</script>
<style>
  .row.header {
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    height: 62px;
    margin: 30px 0px 69px;
    padding: 0px 12px;
  }

  .row-sm.header {
    height: auto;
  }

  .col-xl-6 {
    display: flex;
    align-items: center;
  }

  .col-xl-6:last-child {
    justify-content: flex-end;
  }

  a {
    width: 22px;
    height: 22px;
  }

  .col-xl-6:first-child > div {
    margin-right: 22px;
  }

  .col-xl-6:last-child > div {
    margin-left: 22px;
  }

  p {
    margin: 0px;
  }

  .name {
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #2C2C2C;

  }

  .access {
    font-weight: 300;
    font-size: 11px;
    line-height: 13px;
    color: #2C2C2C;
  }

  @media (max-width: 576px) {
    .col-sm-6 {
      justify-content: center;
      padding: 10px 0px;
    }

    .col-sm-6 div {
      margin: 0px 10px;
    }
  }

</style>
