<template>
  <div class="block1 col-9">
    <h1>Тестирование Функциональной Части</h1>
    <hr />
    Результат:{{ result }}
    <div class="accordion" id="accordionExample">
      <div
        class="accordion-item"
        v-for="(buttonElements, index) in dateForm"
        v-bind:key="index"
      >
        <h2 class="accordion-header" v-bind:id="index">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            v-bind:data-bs-target="'#' + buttonElements.id + index"
            aria-expanded="false"
            v-bind:aria-controls="index"
          >
            {{ buttonElements.title }}
          </button>
        </h2>
        <div
          v-bind:key="index"
          v-bind:id="buttonElements.id + index"
          class="accordion-collapse collapse"
          v-bind:aria-labelledby="'heading' + index"
          data-bs-parent="#accordionExample"
        >
          <div
            v-for="(
              questionsBlock, indexQuestionsBlock
            ) in buttonElements.questionsBlocks"
            v-bind:key="indexQuestionsBlock"
            class="accordion-body"
          >
            <h5>
              {{ questionsBlock.titleQuestions }}
            </h5>
            <hr />
            <div
              ref=""
              v-for="(Answer, indexAnswersBlock) in questionsBlock.Answers"
              v-bind:key="indexAnswersBlock"
              class="form-check form-check-inline"
            >
              <input
                @click="pushResult(questionsBlock.id, Answer.valueAnswer)"
                class="form-check-input"
                type="radio"
                v-bind:name="questionsBlock.id"
                v-bind:id="'inlineRadio' + indexAnswersBlock"
                v-bind:value="Answer.valueAnswer"
              />

              <label
                class="form-check-label"
                v-bind:for="'inlineRadio' + indexAnswersBlock"
                >{{ Answer.titleAnswer }}</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <button class="btn btn-info">Пройти тест при помощи приложения</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: [],
      clicked: false,
      dateForm: [
        {
          title: "Фонарик",
          id: "Colapse",
          questionsBlocks: [
            {
              titleQuestions: "Фонарик Работает",
              id: 0,
              Answers: [
                { id: 0, titleAnswer: "Да", valueAnswer: "true" },
                { id: 1, titleAnswer: "Нет", valueAnswer: "false" },
              ],
            },
            {
              titleQuestions: "Фонарик не мерцает",
              id: 1,
              Answers: [
                { id: 2, titleAnswer: "Да", valueAnswer: "true" },
                { id: 3, titleAnswer: "Нет", valueAnswer: "false" },
              ],
            },
          ],
        },
        {
          title: "Микрофон/Дисплей",
          id: "Colapse",
          questionsBlocks: [
            {
              titleQuestions: "Микрофон запускается",
              id: 2,
              Answers: [
                { id: 0, titleAnswer: "Нет", valueAnswer: "true" },
                {
                  id: 1,
                  titleAnswer: "Да",
                  valueAnswer: "false",
                },
              ],
            },
            {
              titleQuestions: "Микрофон четко определяет сказанное",
              id: 3,
              Answers: [
                { id: 2, titleAnswer: "Да", valueAnswer: "true" },
                { id: 3, titleAnswer: "Нет", valueAnswer: "false" },
              ],
            },
            {
              titleQuestions: "Динамик работает",
              id: 4,
              Answers: [
                { id: 4, titleAnswer: "Да", valueAnswer: "true" },
                { id: 5, titleAnswer: "Нет", valueAnswer: "false" },
              ],
            },
            {
              titleQuestions: "Звук слышен без хрипов",
              id: 5,
              Answers: [
                { id: 6, titleAnswer: "Да", valueAnswer: "true" },
                { id: 7, titleAnswer: "Нет", valueAnswer: "false" },
              ],
            },
          ],
        },
        {
          title: "Камера",
          id: "Colapse",
          questionsBlocks: [
            {
              titleQuestions: "Камера запускается",
              id: 6,
              Answers: [
                { id: 0, titleAnswer: "Да", valueAnswer: "true" },
                {
                  id: 1,
                  titleAnswer: "Нет",
                  valueAnswer: "true",
                },
              ],
            },
            {
              titleQuestions: "Снимки допустимого качества",
              id: 7,
              Answers: [
                { id: 2, titleAnswer: "Да", valueAnswer: "true" },
                {
                  id: 3,
                  titleAnswer: "Нет, есть деффекты",
                  valueAnswer: "false",
                },
              ],
            },
          ],
        },
        {
          title: "Акселерометр",
          id: "Colapse",
          questionsBlocks: [
            {
              titleQuestions: "Акселерометр определяет смену положения экрана",
              id: 8,
              Answers: [
                { id: 0, titleAnswer: "Да", valueAnswer: "true" },
                { id: 1, titleAnswer: "Нет", valueAnswer: "false" },
              ],
            },
          ],
        },
        {
          title: "Экран",
          id: "Colapse",
          questionsBlocks: [
            {
              titleQuestions: "Нет проблем с сенсерным покрытием ",
              id: 9,
              Answers: [
                { id: 0, titleAnswer: "Да", valueAnswer: "true" },
                {
                  id: 1,
                  titleAnswer: "Нет",
                  valueAnswer: "true",
                },
              ],
            },
            {
              titleQuestions: "Есть битые пиксели",
              id: 10,
              Answers: [
                { id: 2, titleAnswer: "Да", valueAnswer: "true" },
                {
                  id: 3,
                  titleAnswer: "Нет , чистый экран",
                  valueAnswer: "false",
                },
              ],
            },
          ],
        },
        {
          title: "Вибрация",
          id: "Colapse",
          questionsBlocks: [
            {
              titleQuestions: "Вибрация ощущается",
              id: 11,
              Answers: [
                { id: 0, titleAnswer: "Да", valueAnswer: "true" },
                {
                  id: 1,
                  titleAnswer: "Нет",
                  valueAnswer: "true",
                },
              ],
            },
          ],
        },
        {
          title: "Кнопки",
          id: "Colapse",
          questionsBlocks: [
            {
              titleQuestions: "Кнопки все исправны",
              id: 12,
              Answers: [
                { id: 0, titleAnswer: "Да", valueAnswer: "true" },
                {
                  id: 1,
                  titleAnswer: "Нет",
                  valueAnswer: "true",
                },
              ],
            },
          ],
        },
        {
          title: "Bluetooth",
          id: "Colapse",
          questionsBlocks: [
            {
              titleQuestions: "Камера запускается",
              id: 13,
              Answers: [
                { id: 0, titleAnswer: "Да", valueAnswer: "true" },
                {
                  id: 1,
                  titleAnswer: "Нет",
                  valueAnswer: "true",
                },
              ],
            },
            {
              titleQuestions: "Снимки допустимого качества",
              id: 14,
              Answers: [
                { id: 2, titleAnswer: "Да", valueAnswer: "true" },
                {
                  id: 3,
                  titleAnswer: "Нет, есть деффекты",
                  valueAnswer: "false",
                },
              ],
            },
          ],
        },
        {
          title: "Аккаунты",
          id: "Colapse",
          questionsBlocks: [
            {
              titleQuestions: "Аккаунты все отвязаны",
              id: 15,
              Answers: [
                { id: 0, titleAnswer: "Да", valueAnswer: "true" },
                {
                  id: 1,
                  titleAnswer: "Нет",
                  valueAnswer: "true",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    pushResult(idBlock, valueEl, e) {
      let vm = this;
      this.result[idBlock] = valueEl;
      console.log(e);
    },
  },
};
</script>
<style scoped>
.green {
  color: green;
}
.blue {
  color: blue;
}
</style>


