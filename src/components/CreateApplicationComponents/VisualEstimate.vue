<template>
  <section>
    <div class="form">
      <div class="form_content_block">
        <h2>Экран</h2>
        <div class="info">
          <p>
            Внимание: Перед проверкой экрана необходимо выбрать светлый тип фона
          </p>
        </div>
        <div class="img"><img :src="img_1" alt="" /></div>
        <div class="question">
          <p class="title">
            Проверьте экран на наличие засветов, выгораний и отслоений
            <span> см. пример выше</span>
          </p>
          <div class="question_radio col_2_box">
            <label for="dScreenFlashing_1">
              <div class="radio_box" @click="getValue">
                <input
                  v-model="FormSubmit.dScreenFlashing"
                  type="radio"
                  name="dScreenFlashing"
                  :value="{
                    title: 'Засветы - есть',
                    value: 20,
                  }"
                  id="dScreenFlashing_1"
                />

                <p>Да, деффекты есть</p>
              </div>
            </label>
            <label for="dScreenFlashing_2">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dScreenFlashing"
                  type="radio"
                  name="dScreenFlashing"
                  id="dScreenFlashing_2"
                  :value="{
                    title: 'Засветов нет',
                    value: 0,
                  }"
                />
                <p>Дефектов нет</p>
              </div>
            </label>
          </div>
        </div>
        <hr />
      </div>
      <div class="form_content_block">
        <div class="info">
          <p>Внимание: Иконка должна следовать полностью по всему экрану!</p>
        </div>
        <div class="video col_2_box">
          <VideoDemonstraton :Src="vid_1" />
          <VideoDemonstraton :Src="vid_2" />
        </div>

        <div class="question">
          <p class="title">
            Зажмите любую иконку и проведи ее по всему экрану
            <span> см. пример выше</span>
          </p>
          <div class="question_radio col_2_box">
            <label for="dScreenTouch_1">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dScreenTouch"
                  type="radio"
                  name="dScreenTouch"
                  id="dScreenTouch_1"
                  :value="{
                    title: 'Иконка не проводится по всему экрану',
                    value: 20,
                  }"
                />
                <p>Иконка не проводится по всему экрану</p>
              </div>
            </label>
            <label for="dScreenTouch_2">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dScreenTouch"
                  type="radio"
                  name="dScreenTouch"
                  id="dScreenTouch_2"
                  :value="{
                    title: 'Иконка проводится по всему экрану',
                    value: 0,
                  }"
                />
                <p>Иконка проводится по всему экрану</p>
              </div>
            </label>
          </div>
        </div>
        <hr />
      </div>
      <div class="form_content_block">
        <div class="info">
          <p>
            Внимание: Не забудьте предупредить клиента о том что защитное стекло
            Вы установить не сможете
          </p>
        </div>
        <div class="video">
          <VideoDemonstraton :Src="vid_3" />
        </div>
        <div class="question">
          <p class="title">
            Предупредите клиента о необходимости снять все защитные элементы с
            экрана устройства
            <span> см. пример выше</span>
          </p>
          <div class="question_radio col_2_box">
            <label for="dScreenProtection_1">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dScreenProtection"
                  type="radio"
                  name="dScreenProtection"
                  id="dScreenProtection_1"
                  :value="{
                    title: 'Защитные элементы клиент отказывается снимать',
                    value: 20,
                  }"
                />
                <p>Защитные элементы клиент отказывается снимать</p>
              </div>
            </label>
            <label for="dScreenProtection_2">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dScreenProtection"
                  type="radio"
                  name="dScreenProtection"
                  id="dScreenProtection_2"
                  :value="{
                    title: 'Защитные элементы сняты',
                    value: 0,
                  }"
                />
                <p>Защитные элементы сняты</p>
              </div>
            </label>
          </div>
        </div>
        <hr />
      </div>
      <div class="form_content_block">
        <div class="img"><img :src="img_4" alt="" /></div>
        <div class="question">
          <p class="title">
            Есть ли на экране устройства трещины или сколы
            <span> см. пример выше</span>
          </p>
          <div class="question_radio col_2_box">
            <label for="dScreenDefect_1">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dScreenDefect"
                  type="radio"
                  name="dScreenDefect"
                  id="dScreenDefect_1"
                  :value="{
                    title: 'На экране устройства есть дефекты',
                    value: 5,
                  }"
                />
                <p>Да , деффекты есть</p>
              </div>
            </label>
            <label for="dScreenDefect_2">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dScreenDefect"
                  type="radio"
                  name="dScreenDefect"
                  id="dScreenDefect_2"
                  :value="{
                    title: 'На экране устройства нет дефектов',
                    value: 0,
                  }"
                />
                <p>Дефектов нет</p>
              </div>
            </label>
          </div>
        </div>
        <hr />
      </div>
      <div class="form_content_block">
        <div class="video col_3_box">
          <VideoDemonstraton :Src="vid_4" />
          <VideoDemonstraton :Src="vid_5" />
          <img :height="400" :width="400" :src="img_16" />
        </div>
        <div class="question">
          <p class="title">
            Посчитайте количество царапин на экране устройства и выберите
            соответствующий ответ.
            <span> см. пример выше</span>
          </p>
          <div class="question_radio col_3_box">
            <label for="dScreenDefects_1">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dScreenDefects"
                  type="radio"
                  name="dScreenDefects"
                  id="dScreenDefects_1"
                  :value="{
                    title: 'На экране устройства Больше 10 царапин',
                    value: 8,
                  }"
                />
                <p>Больше 10 царапин</p>
              </div>
            </label>
            <label for="dScreenDefects_2">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dScreenDefects"
                  type="radio"
                  name="dScreenDefects"
                  id="dScreenDefects_2"
                  :value="{
                    title: 'На экране устройства меньше 10 царапин',
                    value: 3,
                  }"
                />
                <p>Меньше 10 царапин</p>
              </div>
            </label>
            <label for="dScreenDefects_3">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dScreenDefects"
                  type="radio"
                  name="dScreenDefects"
                  id="dScreenDefects_3"
                  :value="{
                    title: 'На экране нет царапин',
                    value: 0,
                  }"
                />
                <p>Без царапин</p>
              </div>
            </label>
          </div>
        </div>
        <hr />
      </div>

      <div class="form_content_block">
        <h2>Корпус</h2>
        <div class="info">
          <p>
            Внимание: Перед проверкой с корпуса необходимо снять все защитные
            элементы: чехлы, накладки, пленки, дополнительные защитные стекла и
            т.п.
          </p>
        </div>
        <div class="video col_3_box">
          <VideoDemonstraton :Src="vid_6" />
          <VideoDemonstraton :Src="vid_7" />
          <VideoDemonstraton :Src="vid_8" />
        </div>
        <div class="question">
          <div class="question_radio col_3_box">
            <label for="dBodyDefects_1">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dBodyDefects"
                  type="radio"
                  name="dBodyDefects"
                  id="dBodyDefects_1"
                  :value="{
                    title: 'Корпус поврежден',
                    value: 8,
                  }"
                />
                <p>Корпус поврежден</p>
              </div>
            </label>
            <label for="dBodyDefects_2">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dBodyDefects"
                  type="radio"
                  name="dBodyDefects"
                  id="dBodyDefects_2"
                  :value="{
                    title: 'Корпус со следами эсклуатации',
                    value: 3,
                  }"
                />
                <p>Корпус со следами эсклуатации</p>
              </div>
            </label>
            <label for="dBodyDefects_3">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dBodyDefects"
                  type="radio"
                  name="dBodyDefects"
                  id="dBodyDefects_3"
                  :value="{
                    title: 'Корпус в идеальном состоянии',
                    value: 0,
                  }"
                />
                <p>Корпус в идеальном состоянии</p>
              </div>
            </label>
            <div class="list">
              <ul>
                <p>Отметьте, если:</p>
                <li>-Есть трещина</li>
                <li>-Есть скол корпуса</li>
                <li>-Корпус деформирован</li>
                <li>-Корпус сильно зацарапан</li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <p>Отметьте, если:</p>
                <li>-Присутствуют мелкие царапины</li>
                <li>-До 10% потертостей</li>
                <li>-До 10 царапин в длину не более 5 мм</li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <p>Отметьте, если:</p>
                <li>-Выглядит как новый</li>
                <li>-Допускается до 10 царапин</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div class="form_content_block">
        <h2>Кнопки</h2>
        <div class="info">
          <p>
            Внимание: Необходимо проверить на работоспособность все кнопки,
            которые есть на устройстве, в том числе и навигационные если таковые
            присутствуют. Если одна из кнопок отсутствует или не работает значит
            кнопки повреждены
          </p>
        </div>
        <div class="video col_2_box">
          <VideoDemonstraton :Src="vid_9" />
          <VideoDemonstraton :Src="vid_10" />
        </div>
        <div class="question">
          <p class="title">
            Нажмите на все кнопки устройства, в том числе и сенсорные
            <span> см. пример выше</span>
          </p>

          <div class="question_radio col_2_box">
            <label for="dButtonWork_1">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dButtonWork"
                  type="radio"
                  name="dButtonWork"
                  id="dButtonWork_1"
                  :value="{
                    title: 'Кнопки не работают',
                    value: 20,
                  }"
                />
                <p>Кнопки не работают</p>
              </div>
            </label>
            <label for="dButtonWork_2">
              <div class="radio_box">
                <input
                  v-model="FormSubmit.dButtonWork"
                  type="radio"
                  name="dButtonWork"
                  id="dButtonWork_2"
                  :value="{
                    title: 'Кнопки работают',
                    value: 0,
                  }"
                />
                <p>Кнопки работают</p>
              </div>
            </label>
          </div>
        </div>
        <hr />
      </div>
      <div class="button_group">
        <div class="btn cancel" v-on:click="CancelReq()">Отмена</div>
        <div class="btn back" v-on:click="BackReq()">Назад</div>
        <div class="btn" v-if="varification" v-on:click="ContinueReq()">
          Далее
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import VideoDemonstraton from "../Media/VideoDemonstration.vue";
import img_1 from "../../assets/Request/1.jpg";
import img_2 from "../../assets/Request/2.jpg";
import img_3 from "../../assets/Request/3.jpg";
import img_4 from "../../assets/Request/4.jpg";
import img_5 from "../../assets/Request/5.jpg";
import img_6 from "../../assets/Request/6.jpg";
import img_7 from "../../assets/Request/7.jpg";
import img_16 from "../../assets/Request/16.png";
import vid_1 from "../../assets/Request/video/1.mp4";
import vid_2 from "../../assets/Request/video/2.mp4";
import vid_3 from "../../assets/Request/video/3.mp4";
import vid_4 from "../../assets/Request/video/4.mp4";
import vid_5 from "../../assets/Request/video/5.mp4";
import vid_6 from "../../assets/Request/video/6.mp4";
import vid_7 from "../../assets/Request/video/7.mp4";
import vid_8 from "../../assets/Request/video/8.mp4";
import vid_9 from "../../assets/Request/video/9.mp4";
import vid_10 from "../../assets/Request/video/10.mp4";
export default {
  data() {
    return {
      img_1: img_1,
      img_2: img_2,
      img_3: img_3,
      img_4: img_4,
      img_5: img_5,
      img_6: img_6,
      img_7: img_7,
      img_16: img_16,
      vid_1: vid_1,
      vid_2: vid_2,
      vid_3: vid_3,
      vid_4: vid_4,
      vid_5: vid_5,
      vid_6: vid_6,
      vid_7: vid_7,
      vid_8: vid_8,
      vid_9: vid_9,
      vid_10: vid_10,
      FormSubmit: {
        dScreenFlashing: {
          value: null,
          title: "Засветов нет",
        },
        dScreenTouch: {
          value: null,
          title: "Иконка проводится по всему экрану",
        },
        dScreenProtection: {
          value: null,
          title: "Защитные элементы сняты",
        },
        dScreenDefect: {
          value: null,
          title: "Деффектов на экране нет",
        },
        dScreenDefects: {
          value: null,
          title: "На экране меньше 10 царапин",
        },
        dBodyDefects: {
          value: null,
          title: "Корпус в идеальном состоянии",
        },
        dButtonWork: {
          value: null,
          title: "Кнопки работают",
        },
      },
    };
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
  components: {
    VideoDemonstraton,
  },
};
</script>
<style lang="scss"></style>
