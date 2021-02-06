<template>
  <div class="box-infos">
    <div class="box-infos__help">
      <img src="../assets/icon-help.svg" alt="Ilustração Ajuda">
      <p>Central de Ajuda</p>
      <img src="../assets/icon-arrow.svg" alt="Ilustração Seta">
    </div>

    <div class="box-infos__status">
      <div class="box-infos__status--solicitacao">
        <img src="../assets/icon-solicitacao.svg" alt="">
        <p>Solicitação</p>
      </div>

      <div class="box-infos__status--separacao">
        <img src="../assets/icon-separacao.svg" alt="">
        <p>Pedido<br>em separação</p>
      </div>

      <div class="box-infos__status--transito">
        <img src="../assets/icon-transito.svg" alt="">
        <p>Motorista<br>em trânsito</p>
      </div>

      <div class="box-infos__status--entregue">
        <img src="../assets/icon-entregue.svg" alt="">
        <p>Pedido<br>entregue</p>
      </div>
    </div>

    <div class="box-infos__delivery">
      <h1>SAIU PARA ENTREGA</h1>
      <p>Seu pedido da <strong>Dafiti</strong> saiu para entrega, e será <strong>entregue</strong> no <strong>endereço</strong>:</p>
    </div>

    <div class="box-infos__address">
      <img src="../assets/icon-map.svg" alt="">
      <p>Avenida Doutor Gastão Vidigal, 1132<br/>
        Vila Leopoldina - São Paulo - SP<br/>Apto - 1234</p>
    </div>

    <div class="box-infos__hour">
      <img src="../assets/icon-hour.svg" alt="">
      <p>HORÁRIO ESTIMADO: <span>14:45 - 16:58</span></p>
    </div>

    <div class="box-infos__line">
      <img src="../assets/line.svg" alt="">
    </div>

    <div class="box-infos__data">
      <div class="circle">
        <p>Falta</p>
        <h1>1</h1>
        <p>Entrega</p>
      </div>

      <div>
        <p>Sua entrega é a nº: <span>19</span></p>
        <p>Entrega Atual: <span>18</span></p>
        <p>Quantidade de volumes: <span>3</span></p>
        <p>Motorista: <span>Vinicius Marques do Nascimento</span></p>
        <p>Horário Estimado: <span>15:29 - 16:29</span></p>
      </div>
    </div>

    <div class="box-infos__timeline">
      <p>teste</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoxInfos',
}
</script>


<style scoped lang="scss">
.box-infos {
  background: #fff;
  box-shadow: 5px 1px 9px rgba(0, 0, 0, 0.25);
  border-radius: 4px 0px 0px 4px;
  height: 90vh;
  max-width: 350px;
  width: 100%;  
  margin-left: 20px;
  padding: 20px 20px 0 20px;
  z-index: 1;

  &__help {
    background: #4B4B4D;
    border-radius: 4px;
    padding: 12px 0;
    display: flex;
    justify-content: center;
    cursor: pointer;

    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      color: #FFFFFF;
      margin-left: 8px;
    }
  }

  &__status {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    text-align: center;

    p {
      font-size: 12px;
      line-height: 11px;
      color: #4B4B4D;
    }
  }

  &__delivery {
    margin-top: 40px;
    background: #0B4F6C;
    border-radius: 4px;
    padding: 10px 12px 10px 14px;

    h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 19px;
      color: #FFFFFF;
      margin-bottom: 8px;
    }

    p {
      font-size: 12px;
      line-height: 14px;
      color: #FFFFFF;
    }
  }

  &__address {
    display: flex;
    margin-top: 20px;

    img {
      display: flex;
      justify-content: flex-start;
      width: 14px;
      height: 20px;
    }

    p {
      margin-left: 15px;
      font-size: 16px;
      line-height: 16px;
      color: #4B4B4D;
    }
  }

  &__hour {
    display: flex;
    margin-top: 20px;

    p {
      margin-left: 15px;
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
      color: #0B4F6C;

      span {
        font-weight: 600;
      }
    }
  }

  &__line {
    display: flex;
    margin-top: 20px;
    justify-content: center;
  }

  &__data {
    display: flex;
    margin-top: 20px;
    
    p {
      font-weight: 700;
      font-size: 14px;
      line-height: 13.62px;
      margin-bottom: 5px;

      span {
        font-weight: 600;
      }

      &:first-child {
        span {
          color: red;
        }
      }
    }

    .circle {

    }
  }

  &__timeline {
    display: flex;
    margin-top: 20px;
    border: 1px solid #E63B4F;
    border-radius: 4px;
    height: 60px;
  }
}

/* ============= RESPONSIVE ============= */
@media screen and (max-width: 768px) {
  .box-infos {
    position: absolute;
    width: 100%;
    height: 100vh;
    margin-left: 0;
    background: none;
    box-shadow: none;
    border-radius: 0;
  }
}
</style>
