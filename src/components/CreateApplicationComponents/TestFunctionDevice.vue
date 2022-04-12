<template>
  <section>
    <div class="form">
      <div class="form_content_block">
        <h2>Зарядка</h2>
        <div class="info">
          <p>
            Внимание: Если крышка у устройства снимается обязательно снимите
            крышку и проверьте аккумулятор на наличие повреждений и вздутий.
            Если крышка у устройства не съёмная и не видно, что аккумулятор
            вздут, т.е не деформирует заднюю крышку, тогда считаем аккумулятор
            исправным
          </p>
        </div>
        <div class="img"><img :src="img_8" alt="" /></div>

        <div class="question">
          <p class="title">В каком состоянии аккумулятор устройства?</p>
          <div class="question_radio col_2_box">
            <label for="dBattery_1">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dBattery"
                  type="radio"
                  name="dBattery"
                  id="dBattery_1"
                  :value="{ title: 'Аккумулятор поврежден', value: 20 }"
                />
                <p>Аккумулятор поврежден</p>
              </div>
            </label>
            <label for="dBattery_2">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dBattery"
                  type="radio"
                  name="dBattery"
                  id="dBattery_2"
                  :value="{ title: 'Аккумулятор исправен', value: 0 }"
                />
                <p>Аккумулятор исправен</p>
              </div>
            </label>
          </div>
        </div>
        <hr />
      </div>
      <div class="form_content_block">
        <div class="info">
          <p>
            Внимание: Подключаем к устройству кабель зарядного устройства и
            смотрим чтобы заряд устройства увеличился на 1-2%
          </p>
        </div>
        <div class="video col_2_box">
          <VideoDemonstraton :Src="vid_11" />
          <VideoDemonstraton :Src="vid_12" />
        </div>
        <div class="question">
          <p class="title">Устройство заряжается?</p>
          <div class="question_radio col_2_box">
            <label for="dCharging_1">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dCharging"
                  type="radio"
                  name="dCharging"
                  id="dCharging_1"
                  :value="{ title: 'Не заряжается', value: 20 }"
                />
                <p>Не заряжается</p>
              </div>
            </label>
            <label for="dCharging_2">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dCharging"
                  type="radio"
                  name="dCharging"
                  id="dCharging_2"
                  :value="{ title: 'Заряжается', value: 0 }"
                />
                <p>Заряжается</p>
              </div>
            </label>
            <div class="list">
              <ul>
                <p>Отметьте, если:</p>
                <li>-Устройство не зарядилось на 1%-2%</li>
                <li>-Устройство выдает ошибку при подключении ЗУ</li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <p>Отметьте, если:</p>
                <li>-Устройство зарядилось на 1%-2%</li>
                <li>-Устройство не выдает ошибку при подключении ЗУ</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div class="form_content_block">
        <h2>Wi-Fi</h2>
        <div class="info">
          <p>
            Внимание: При проверке Wi-Fi, необходимо зайти в настройки включить
            поиск сетей. Устройство должно отобразить Вашу рабочую сеть (Если
            рядом нет доступной сети Wi-Fi, то раздай ее на своем аппарате)
          </p>
        </div>
        <div class="video col_2_box">
          <VideoDemonstraton :Src="vid_13" />
          <VideoDemonstraton :Src="vid_14" />
        </div>
        <div class="question">
          <div class="question_radio col_2_box">
            <label for="dWifi_1">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dWifi"
                  type="radio"
                  name="dWifi"
                  id="dWifi_1"
                  :value="{ title: 'Wi-Fi не работает', value: 20 }"
                />
                <p>Wi-Fi не работает</p>
              </div>
            </label>
            <label for="dWifi_2">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dWifi"
                  type="radio"
                  name="dWifi"
                  id="dWifi_2"
                  :value="{ title: 'Wi-Fi работает', value: 0 }"
                />
                <p>Wi-Fi работает</p>
              </div>
            </label>
            <div class="list">
              <ul>
                <p>Отметьте, если:</p>
                <li>-Wi-Fi автоматически выключается</li>
                <li>
                  -На экране устройства нетдоступных сетей для подключения
                </li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <p>Отметьте, если:</p>
                <li>
                  -При включении Wi-Fi, есть доступные Wi-Fi сети к которым
                  можно подключится
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div class="form_content_block">
        <h2>Bluetooth</h2>
        <div class="info">
          <p>
            Внимание: При проверке Bluetooth, необходимо зайти в настройки
            включить поиск устройств, если отображаются устройства доступные для
            подключения, Bluetooth работает (Если рядом нет доступного Bluetooth
            устройства, то включи его на своем аппарате)
          </p>
        </div>
        <div class="video col_2_box">
          <VideoDemonstraton :Src="vid_15" />
          <VideoDemonstraton :Src="vid_16" />
        </div>
        <div class="question">
          <div class="question_radio col_2_box">
            <label for="dBluetooth_1">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dBluetooth"
                  type="radio"
                  name="dBluetooth"
                  id="dBluetooth_1"
                  :value="{ title: 'Bluetooth не работает', value: 20 }"
                />
                <p>Bluetooth не работает</p>
              </div>
            </label>
            <label for="dBluetooth_2">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dBluetooth"
                  type="radio"
                  name="dBluetooth"
                  id="dBluetooth_2"
                  :value="{ title: 'Bluetooth работает', value: 0 }"
                />
                <p>Bluetooth работает</p>
              </div>
            </label>
            <div class="list">
              <ul>
                <p>Отметьте, если:</p>
                <li>-Bluetooth автоматически выключается</li>
                <li>-На экране нет доступных устройств для подключения</li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <p>Отметьте, если:</p>
                <li>
                  -При включении Bluetooth, есть доступные устройства к которым
                  можно подключится
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div class="form_content_block">
        <h2>Камера</h2>
        <div class="info">
          <p>
            Внимание: Необходимо открыть приложение камеры сделать фотографию с
            основной и фронтальной (передней) камеры, фото должно получиться не
            размытым, без белых, черных точек.
          </p>
        </div>
        <div class="video col_2_box">
          <VideoDemonstraton :Src="vid_17" />
          <VideoDemonstraton :Src="vid_18" />
        </div>
        <div class="question">
          <p class="title">Проверьте основную и фронтальную камеру</p>
          <div class="question_radio col_2_box">
            <label for="dCam_1">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dCam"
                  type="radio"
                  name="dCam"
                  id="dCam_1"
                  :value="{ title: 'Камера неисправна', value: 20 }"
                />
                <p>Камера неисправна</p>
              </div>
            </label>
            <label for="dCam_2">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dCam"
                  type="radio"
                  name="dCam"
                  id="dCam_2"
                  :value="{ title: 'Камера исправна', value: 0 }"
                />
                <p>Камера исправна</p>
              </div>
            </label>
            <div class="list">
              <ul>
                <p>Отметьте, если:</p>
                <li>-Картинка размыта</li>
                <li>-Приложение камеры вылетает или недоступно</li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <p>Отметьте, если:</p>
                <li>-Фото четкое, без размытия</li>
                <li>-Автофокус работает</li>
                <li>
                  -Модель камеры устройства не имеет основной или фронтальной
                  камеры
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div class="form_content_block">
        <h2>Сотовая связь</h2>
        <div class="info">
          <p>
            Внимание: Проверка Сотовой сети, необходимо в каждый слот установить
            проверочную сим карту, можно установить сразу в оба слота, можно по
            отдельности. Важно проверочная сим-карта должна принадлежать
            обязательно Российскому оператору (МТС, Мегафон, TELE2, Билайн,
            YOTA). Если устройство не видит сим карту попробуйте перезагрузить
            устройство.
          </p>
        </div>
        <div class="video col_2_box">
          <VideoDemonstraton :Src="vid_19" />
          <VideoDemonstraton :Src="vid_20" />
        </div>
        <div class="question">
          <div class="question_radio col_2_box">
            <label for="dCellular_1">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dCellular"
                  type="radio"
                  name="dCellular"
                  id="dCellular_1"
                  :value="{ title: 'Сотовая сеть не работает', value: 20 }"
                />
                <p>Сотовая сеть не работает</p>
              </div>
            </label>
            <label for="dCellular_2">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dCellular"
                  type="radio"
                  name="dCellular"
                  id="dCellular_2"
                  :value="{ title: 'Сотовая сеть работает', value: 0 }"
                />
                <p>Сотовая сеть работает</p>
              </div>
            </label>
            <div class="list">
              <ul>
                <p>Отметьте, если при вставленной сим-карте:</p>
                <li>-Не работает один или несколько слотов сим-карт</li>

                <li>-Корпус сильно зацарапан</li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <p>Отметьте, если при вставленной сим-карте:</p>
                <li>-Все слоты сим-карт работают</li>
                <li>-Можно совершить звонок</li>
                <li>-Данная модель устройства не имеет слота под сим-карту</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div class="form_content_block">
        <h2>Мультимедийный динамик</h2>
        <div class="info">
          <p>
            Внимание: Для проверки данного динамика необходимо совершить
            тестовый звонок на проверяемое устройство, мелодия должна
            воспроизводиться без посторонних звуков
          </p>
        </div>
        <div class="video col_2_box">
          <VideoDemonstraton :Src="vid_21" />
          <VideoDemonstraton :Src="vid_22" />
        </div>
        <div class="question">
          <p class="title">Проверка мультимедийного динамика</p>
          <div class="question_radio col_2_box">
            <label for="dMultimediaDynamic_1">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dMultimediaDynamic"
                  type="radio"
                  name="dMultimediaDynamic"
                  id="dMultimediaDynamic_1"
                  :value="{
                    title: 'Мультимедийный динамик не работает',
                    value: 20,
                  }"
                />
                <p>Мультимедийный динамик не работает</p>
              </div>
            </label>
            <label for="dMultimediaDynamic_2">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dMultimediaDynamic"
                  type="radio"
                  name="dMultimediaDynamic"
                  id="dMultimediaDynamic_2"
                  :value="{
                    title: 'Мультимедийный динамик работает',
                    value: 0,
                  }"
                />
                <p>Мультимедийный динамик работает</p>
              </div>
            </label>
            <div class="list">
              <ul>
                <p>Отметьте, если :</p>
                <li>-Полифонический динамик хрипит/пищит/трещит</li>
                <li>-Не играет мелодия звонка</li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <p>Отметьте, если :</p>
                <li>-Полифонический динамик не хрипит/пищит/трещит</li>
                <li>-Мелодия звонка воспроизводится без постораниих звуков</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div class="form_content_block">
        <h2>Микрофон и разговорный динамик</h2>
        <div class="info">
          <p>
            Внимание: Отвечаем на тестовый звонок, произведенный с Вашего
            устройства и вначале говорим несколько слов в принимаемое
            устройство, в своем телефоне Вы должны услышать свой голос четко,
            громко,без посторонних звуков, далее меняем телефоны местами и
            проверяем также разговорный динамик, голос также должен быть слышен
            четко без посторонних звуков.
          </p>
        </div>
        <div class="video col_2_box">
          <VideoDemonstraton :Src="vid_23" />
          <VideoDemonstraton :Src="vid_24" />
        </div>
        <div class="question">
          <p class="title">Проверка микрофона и разговорного динамика</p>
          <div class="question_radio col_2_box">
            <label for="dVoiceDynamic_1">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dVoiceDynamic"
                  type="radio"
                  name="dVoiceDynamic"
                  id="dVoiceDynamic_1"
                  :value="{
                    title: 'Микрофона или разговорный динамик не работает',
                    value: 20,
                  }"
                />
                <p>Микрофона или разговорный динамик не работает</p>
              </div>
            </label>
            <label for="dVoiceDynamic_2">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dVoiceDynamic"
                  type="radio"
                  name="dVoiceDynamic"
                  id="dVoiceDynamic_2"
                  :value="{ title: 'Микрофон и разговорный динамик работает', value: 0 }"
                />
                <p>Микрофон и разговорный динамик работает</p>
              </div>
            </label>
            <div class="list">
              <ul>
                <p>Отметьте, если при вставленной сим-карте:</p>
                <li>-Есть посторонние шумы</li>
                <li>-Есть посторонние звуки</li>
                <li>-Оотсутствуют какие-либо звуки</li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <p>Отметьте, если при вставленной сим-карте:</p>
                <li>-Голос слышно четко</li>
                <li>-Нет поторонних шумов/искажений/звуков</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <div class="button_group">
      <div class="btn cancel" v-on:click="CancelReq()">Отмена</div>
      <div class="btn back" v-on:click="BackReq()">Назад</div>
      <div class="btn" v-if="varification" v-on:click="ContinueReq()">
        Далее
      </div>
    </div>
  </section>
</template>
<script>
import VideoDemonstraton from "../Media/VideoDemonstration.vue";
import img_8 from "../../assets/Request/8.jpg";
import img_9 from "../../assets/Request/9.png";
import img_10 from "../../assets/Request/10.jpg";
import img_11 from "../../assets/Request/11.jpg";
import img_12 from "../../assets/Request/12.jpg";
import img_13 from "../../assets/Request/13.jpg";
import img_14 from "../../assets/Request/14.jpg";
import img_15 from "../../assets/Request/15.jpg";
import vid_11 from "../../assets/Request/video/11.mp4";
import vid_12 from "../../assets/Request/video/12.mp4";
import vid_13 from "../../assets/Request/video/13.mp4";
import vid_14 from "../../assets/Request/video/14.mp4";
import vid_15 from "../../assets/Request/video/15.mp4";
import vid_16 from "../../assets/Request/video/16.mp4";
import vid_17 from "../../assets/Request/video/17.mp4";
import vid_18 from "../../assets/Request/video/18.mp4";
import vid_19 from "../../assets/Request/video/19.mp4";
import vid_20 from "../../assets/Request/video/20.mp4";
import vid_21 from "../../assets/Request/video/21.mp4";
import vid_22 from "../../assets/Request/video/22.mp4";
import vid_23 from "../../assets/Request/video/23.mp4";
import vid_24 from "../../assets/Request/video/24.mp4";
export default {
  data() {
    return {
      img_8: img_8,
      img_9: img_9,
      img_10: img_10,
      img_11: img_11,
      img_12: img_12,
      img_13: img_13,
      img_14: img_14,
      img_15: img_15,
      vid_11: vid_11,
      vid_12: vid_12,
      vid_13: vid_13,
      vid_14: vid_14,
      vid_15: vid_15,
      vid_16: vid_16,
      vid_17: vid_17,
      vid_18: vid_18,
      vid_19: vid_19,
      vid_20: vid_20,
      vid_21: vid_21,
      vid_22: vid_22,
      vid_23: vid_23,
      vid_24: vid_24,
      FormSubmit: {
        dBattery: {
          value: null,
          title: "Аккумулятор исправен",
        },
        dWifi: {
          value: null,
          title: "Wi-Fi работает",
        },
        dBluetooth: {
          value: null,
          title: "Bluetooth работает",
        },
        dCam: {
          value: null,
          title: "Камера исправна",
        },
        dCellular: {
          value: null,
          title: "Сотовая сеть работает",
        },
        dMultimediaDynamic: {
          value: null,
          title: "Мультимедийный динамик работает",
        },
        dVoiceDynamic: {
          value: null,
          title: "Микрофон и разговорный динамик работает",
        },
        dCharging: {
          value: null,
          title: "Устройство заряжается",
        },
      },
    };
  },
  methods: {
    ContinueReq() {
      this.$emit("next", this.FormSubmit);
    },
    BackReq() {
      this.$emit("back");
    },
    CancelReq() {
      this.$emit("cancel");
    },
  },
  computed: {
    varification() {
      let status = true;
      for (let key in this.FormSubmit) {
        if (this.FormSubmit[key].value == null) {
          console.log(key);
          status = false;
        }
      }
      return status;
    },
  },
  components: {
    VideoDemonstraton,
  },
};
</script>
