<template>
  <section class="container">
    <div class="box-infos" data-desktop>
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
        <p>Seu pedido da <strong>{{nameCompany}}</strong> saiu para entrega, e será <strong>entregue</strong> no <strong>endereço</strong>:</p>
      </div>

      <div class="box-infos__address">
        <img src="../assets/icon-map.svg" alt="">
        <p>{{address}}</p>
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
        <div class="box-infos__timeline--title">
          <img src="../assets/icon-timeline.svg" alt="">
          <h1>Histórico</h1>
        </div>

        <div class="box-infos__timeline--data">
          <p>
            Solicitação recebida<br>
            <span>14/08 - 22h41</span>
          </p>

          <p>
            Pedido em separação<br>
            <span>14/08 - 16h23</span>
          </p>

          <p>
            Motorista está a caminho<br>
            <span>14/08 - 16h23</span>
          </p>
        </div>
      </div>
    </div>

    <div class="box-infos" data-mobile>
      <div class="box-infos__data">
        <div class="box-infos__data--circle">
          <p>Falta</p>
          <h1>1</h1>
          <p>Entrega</p>
        </div>

        <div class="box-infos__data--status">
          <div>
            <span><img src="../assets/icon-separacao-white.svg" alt=""></span>
            <span><img src="../assets/icon-solicitacao-white.svg" alt=""></span>
            <span><img src="../assets/icon-transito-white.svg" alt=""></span>
            <span><img src="../assets/icon-entregue-white.svg" alt=""></span>
          </div>

          <div>
            <p>Status do pedido: Saiu para entrega</p>
            <p>Horário estimado:  15:29 - 16:29</p>
          </div>
        </div>
      </div>

      <div class="box-infos__help">
        <p>Central de Ajuda</p>
      </div>

      <div class="box-infos__data-bottom">
        <div class="box-infos__data-bottom--title">
          <p>Seu pedido da <strong>{{nameCompany}}</strong> está com a Uello e será <strong>entregue</strong> no endereço:</p>
        </div>

        <div class="box-infos__data-bottom--address">
          <img src="../assets/icon-map.svg" alt="">
          <p>{{address}}</p>
        </div>

        <div class="box-infos__data-bottom--cta">
          <p>Clique aqui para saber mais</p>
        </div>

        <div class="box-infos__data-bottom--hour">
          <img src="../assets/icon-hour.svg" alt="">
          <p>HORÁRIO ESTIMADO: <span>14:45 - 16:58</span></p>
        </div>

        <div class="box-infos__data-bottom--timeline">
          <div class="box-infos__timeline--history">
            <img src="../assets/icon-timeline.svg" alt="">
            <h1>Histórico</h1>
          </div>

          <div class="box-infos__timeline--data">
            <p>
              Solicitação recebida<br>
              <span>14/08 - 22h41</span>
            </p>

            <p>
              Pedido em separação<br>
              <span>14/08 - 16h23</span>
            </p>

            <p>
              Motorista está a caminho<br>
              <span>14/08 - 16h23</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BoxInfos',
  computed: {
    ... mapState({
      nameCompany: state => state.nameCompany,
      address: state => state.address,
    })
  },
}
</script>


<style scoped lang="scss">
[data-desktop] {display: block}
[data-mobile] {display: none}
$white: #FFFFFF;
$red: #E63B4F;
$blue: #0B4F6C;
$silver: #CCCCCC;

.container {
  max-width: 380px;
  width: 100%;
  z-index: 1;
}

.box-infos::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

.box-infos::-webkit-scrollbar {
	width: 6px;
	background-color: #F5F5F5;
}

.box-infos::-webkit-scrollbar-thumb {
	background-color: $red;
}

.box-infos {
  background: $white;
  box-shadow: 5px 1px 9px rgba(0, 0, 0, 0.25);
  border-radius: 4px 0px 0px 4px;
  height: 90vh;
  //max-width: 350px;
  //width: 100%;  
  margin-left: 20px;
  padding: 20px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  -webkit-overflow-scrolling: auto;
  z-index: 1;

  &__help {
    background: #4B4B4D;
    border-radius: 4px;
    padding: 12px 0;
    display: flex;
    justify-content: center;
    position: relative;
    cursor: pointer;

    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      color: $white;
      margin-left: 8px;
    }

    img {
      &:last-child {
        position: absolute;
        right: 20px;
        width: 12px;
        height: 20px;
      }
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

    div {
      position: relative;

      img {
        width: 16px;
        padding-bottom: 15px;
      }

      p {
        &::before {
          content: "";
          display: flex;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1px solid $red;
          position: absolute;
          top: 22px;
        }

        &::after {
          content: "";
          display: flex;
          height: 1px;
          background: $red;
          position: absolute;
          top: 46%;
        }
      }

      &:nth-child(1) {
        p {
          &::before {
            margin-left: 24px;
          }

          &::after {
            width: 82px;
            left: 33px;
          }
        }
      }

      &:nth-child(2) {
        p {
          &::before {
            margin-left: 34px;
          }

          &::after {
            width: 84px;
            left: 43px;
          }
        }
      }

      &:nth-child(3) {
        p {
          &::before {
            margin-left: 27px;
          }

          &::after {
            width: 70px;
            left: 37px;
            background: $silver;
          }
        }

        img {
          padding-bottom: 18px;
        }
      }

      &:nth-child(4) {
        p {
          &::before {
            margin-left: 21px;
            background: $silver;
            border-color: $silver;
          }

          &::after {
            display: none;
          }
        }

        img {
          padding-bottom: 20px;
        }
      }
    }
  }

  &__delivery {
    margin-top: 40px;
    background: $blue;
    border-radius: 4px;
    padding: 20px 12px 20px 14px;

    h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 19px;
      color: $white;
      margin-bottom: 8px;
    }

    p {
      font-size: 14px;
      line-height: 14px;
      color: $white;
    }
  }

  &__address {
    display: flex;
    margin-top: 30px;

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
    margin-top: 30px;

    p {
      margin-left: 15px;
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
      color: $blue;

      span {
        font-weight: 600;
      }
    }
  }

  &__line {
    display: flex;
    margin-top: 30px;
    justify-content: center;
  }

  &__data {
    display: flex;
    margin-top: 30px;

    .circle {
      width: 40%;
      background: url('../assets/circle-progress.svg') no-repeat;
      background-size: contain;
      display: flex;
      align-items: center;
      flex-direction: column;

      p {
        &:first-child {
          margin-top: 8px;
        }
      }
    }
    
    p {
      font-weight: 700;
      font-size: 14px;
      line-height: 13.62px;
      margin-bottom: 8px;

      span {
        font-weight: 600;
      }

      &:first-child {
        span {
          color: red;
        }
      }
    }
  }

  &__title {
    display: flex;
    margin-top: 40px;
    border: 1px solid $red;
    border-radius: 4px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  &__timeline {
    display: flex;
    margin-top: 40px;
    border: 1px solid $red;
    border-radius: 4px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    &--title {
      display: flex;
      margin-top: 20px;

      h1 {
        font-weight: 600;
        font-size: 18px;
        line-height: 19px;
        color: $red;
        margin-left: 6px;
      }

      img {
        width: 18px;
      }
    }

    &--data {
      margin-top: 20px;
      
      p {
        font-weight: 600;
        font-size: 16px;
        line-height: 14px;
        color: #4B4B4D;
        margin-bottom: 20px;

        span {
          margin-top: 4px;
          display: block;
          font-weight: 400;
          font-size: 14px;
        }

        &::before {
          content: "";
          display: flex;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          border: 1px solid $red;
          position: absolute;
          left: 20px;
        }
      }

      p:nth-child(1) {
        &::after {
          content: "";
          display: flex;
          width: 1px;
          height: 35px;
          background: $red;
          position: absolute;
          left: 28px;
          bottom: 104px;
        }
      }

      p:nth-child(2) {
        &::after {
          content: "";
          display: flex;
          width: 1px;
          height: 35px;
          background: $red;
          position: absolute;
          left: 28px;
          bottom: 52px;
        }
      }
    }
  }
}

/* ============= RESPONSIVE ============= */
@media screen and (max-width: 768px) {
  [data-desktop] {display: none}
  [data-mobile] {display: block}

  .container {
    max-width: 100%;
  } 

  .box-infos {
    position: initial;
    width: 100%;
    height: 100vh;
    margin-left: 0;
    background: none;
    box-shadow: none;
    border-radius: 0;
    padding: 15px 10px 0 10px;

    &__data {
      margin: 0;
      height: 120px;
      background: $blue;
      color: $white;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;

      &--circle {
        width: 40%;
        background: url('../assets/circle-progress-mobile.png') no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 84px;
        height: 84px;

        p, h1 {
          margin: 0;
        }

        h1 {
          font-size: 17px;
        }
      }

      &--status {
        width: 60%;
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div {
          &:first-child {
            margin-bottom: 12px;
          }
        }

        span {
          display: inline-flex;
          margin-left: 20px;
          position: relative;

          &::before {
            content: "";
            width: 9px;
            height: 9px;
            background: $white;
            border: 1px solid $red;
            display: block;
            border-radius: 50%;
            position: absolute;
            top: 19px;
          }

          &::after {
            content: "";
            width: 24px;
            height: 1px;
            background: $red;
            display: block;
            position: absolute;
            top: 24px;
            left: 11px;
          }

          &:first-child {
            margin-left: 0;
          }

          &:nth-child(1) {
            &::before {
              top: 21px;
            }

            &::after {
              width: 24px;
              top: 26px;
              left: 11px;
            }
          }

          &:nth-child(2) {
            &::before {
              top: 22px;
            }

            &::after {
              width: 24px;
              top: 26px;
              left: 11px;
            }
          }

          &:nth-child(3) {
            &::before {
              top: 21px;
            }

            &::after {
              width: 25px;
              top: 26px;
              left: 11px;
              background: $silver;
            }
          }

          &:nth-child(4) {
            &::before {
              top: 20px;
              background: $silver;
              border: 0;
            }

            &::after {
              content: none;
            }
          }
        }

        p {
          font-weight: 600;
          font-size: 12px;
          margin: 0;

          &:first-child {
            margin-top: 15px;
          }
        }
      }
    }

    &__help {
      margin-top: 50vh;
      width: max-content;

      p {
        font-size: 14px;
        margin: 0;
      }
    }

    &__data-bottom {
      background: $white;
      margin-top: 20px;
      
      &--title {
        display: block;
        margin: 0;
        background: $red;
        border-radius: 4px 4px 0px 0px;
        padding: 15px 12px 15px 15px;

        p {
          font-size: 14px;
          color: $white;
        }
      }

      &--address {
        display: flex;
        margin-top: 30px;
        padding: 0 12px 15px 15px;

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

      &--cta {
        background: $blue;
        border-radius: 4px;
        margin: 0 12px 15px 15px;
        padding: 12px 0;

        p {
          text-align: center;
          font-size: 14px;
          color: $white;
        }
      }

      &--hour {
        display: flex;
        margin: 30px 12px 15px 15px;

        p {
          margin-left: 15px;
          font-weight: 700;
          font-size: 16px;
          line-height: 16px;
          color: $blue;
        }
      }

      &--timeline {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;

        .box-infos__timeline--history {
          display: flex;
          margin-top: 20px;

          h1 {
            font-weight: 600;
            font-size: 18px;
            line-height: 19px;
            color: $red;
            margin-left: 6px;
          }

          img {
            width: 18px;
          }
        }
      }
    }
  }
}
</style>
