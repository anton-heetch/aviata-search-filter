<script setup>
import Button from 'atoms/Button.vue'
import NotRefundableIcon from '../atoms/NotRefundableIcon.vue'
</script>
<template>
  <div class="flightsItem">
    <div class="flightsItem__flightData">
      <div class="flightsItem__flightData__top">
        <div class="logo">
          <img
            src="https://aviata.kz/static/airline-logos/80x80/KC.png"
            alt="air-astana"
          />
          <span>Air Astana</span>
        </div>
        <div class="departureTime">
          <div class="date">25 ноя, вс</div>
          <div class="time">23:25</div>
        </div>
        <div class="flightLength">
          <div class="flightLength__header">
            <span class="flightLength__header__departure">ALA</span>
            <span class="flightLength__header__time">4 ч 20 м</span>
            <span class="flightLength__header__arrival">TSE</span>
          </div>
          <div class="flightLength__timeline">
            <div class="flightLength__timeline__circle"></div>
            <div class="flightLength__timeline__circle"></div>
            <div class="flightLength__timeline__circle"></div>
            <div class="flightLength__timeline__line"></div>
          </div>
          <div class="flightLength__transfer">
            <span>через Шымкент, 1 ч 50 м</span>
          </div>
        </div>
        <div class="arrivalTime">
          <div class="date">26 ноя, вс +1</div>
          <div class="time">03:45</div>
        </div>
      </div>
      <div class="flightsItem__flightData__bottom">
        <Button btn-class="btn-link">Детали перелета</Button>
        <Button btn-class="btn-link">Условия тарифа</Button>
        <div class="ticketStatus"><NotRefundableIcon />невозвратный</div>
      </div>
    </div>
    <div class="flightsItem__flightPrice">
      <div class="flightsItem__flightPrice__top">
        <div class="priceTotal">590 240 ₸</div>
        <Button>Выбрать</Button>
        <div class="priceNote">Цена за всех пассажиров</div>
      </div>
      <div class="flightsItem__flightPrice__bottom">
        <div class="luggage">
          <div class="luggage__weight">Нет багажа</div>
          <Button btn-class="btn-mini">+ Добавить багаж</Button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.flightsItem {
  height: 168px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  display: flex;

  &__flightData {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 40px 44px 20px;

    &__top {
      display: flex;

      .logo {
        font-size: 14px;
        line-height: 20px;
        font-weight: 600;
        display: flex;
        align-items: center;
        margin-right: 14px;

        img {
          width: 20px;
          height: 20px;
          object-fit: contain;
          object-position: right;
        }

        span {
          white-space: nowrap;
          margin-left: 12px;
          min-width: 100px;
        }
      }

      .date {
        font-size: 12px;
        line-height: 16px;
        white-space: nowrap;
      }

      .time {
        font-size: 24px;
        line-height: 32px;
        font-weight: 600;
      }

      .departureTime {
        margin-right: 28px;
      }

      .flightLength {
        display: flex;
        flex-direction: column;
        max-width: 168px;
        width: 100%;
        margin-right: 28px;

        &__header {
          display: flex;
          justify-content: space-between;
          align-items: center;

          &__departure,
          &__arrival {
            font-size: 10px;
            line-height: 12px;
            text-transform: uppercase;
            color: #b9b9b9;
          }

          &__time {
            font-size: 12px;
            line-height: 18px;
          }
        }

        &__timeline {
          display: flex;
          justify-content: space-between;
          position: relative;

          &__circle {
            position: relative;
            z-index: 5;
            width: 5px;
            height: 5px;
            background: #ffffff;
            border: 1px solid #b9b9b9;
            border-radius: 50%;
          }

          &__line {
            position: absolute;
            z-index: 1;
            left: 0;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            height: 1px;
            background-color: #b9b9b9;
          }
        }

        &__transfer {
          font-size: 12px;
          line-height: 20px;
          color: #ff9900;
          text-align: center;
          white-space: nowrap;
        }
      }
    }

    &__bottom {
      display: flex;

      button {
        margin-right: 24px;
      }

      .ticketStatus {
        color: #707276;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
      }
    }
  }

  &__flightPrice {
    background: #f5f5f5;
    max-width: 240px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px 16px;
    text-align: center;

    &__top {
      width: 100%;

      .priceTotal {
        font-size: 26px;
        line-height: 30px;
        margin-bottom: 12px;
      }

      button {
        margin-bottom: 8px;
      }

      .priceNote {
        font-size: 12px;
        line-height: 16px;
        color: #707276;
      }
    }

    &__bottom {
      width: 100%;

      .luggage {
        display: flex;
        justify-content: space-between;

        &__weight {
          width: 100%;
          text-align: center;
          font-size: 12px;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
