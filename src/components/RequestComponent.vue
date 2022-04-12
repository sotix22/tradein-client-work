<template>
  <div class="block1 col-9">
    <h1>Визуальное тестирование</h1>
    <hr />
    Результат:{{ result }}
    <div class="accordion " id="accordionExample">
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
            <hr>
            <div ref=""
              v-for="(Answer, indexAnswersBlock) in questionsBlock.Answers"
              v-bind:key="indexAnswersBlock"
              class="form-check form-check-inline"
            >
              
              <input
                @click="pushResult(questionsBlock.id, Answer.valueAnswer)"
                v-bind:class="{'white': !clicked, 'blue': clicked}"
                v-on:click ="clicked = !clicked"
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      result: [],
      clicked:false,
      dateForm: [
        {
          title: "Cостояние в Целом",
          id: "Colapse",
          questionsBlocks: [
            {
              titleQuestions:
                "Не заводские модификации (гравировки, магниты, части устройства разного цвета)",
              id: 0,
              Answers: [
                { id: 0, titleAnswer: "Да", valueAnswer: "true" },
                { id: 1, titleAnswer: "Нет", valueAnswer: "false" },
              ],
            },
            {
              titleQuestions:
                "Следы неправильной эксплуатации (Отсутствуют винты. Есть следы вскрытия, залития жидкостью, оплавления, запах гари)",
              id: 1,
              Answers: [
                { id: 2, titleAnswer: "Да", valueAnswer: "true" },
                { id: 3, titleAnswer: "Нет", valueAnswer: "false" },
              ],
            },
          ],
        },
        {
          title: "Дисплей",
          id: "Colapse",
          questionsBlocks: [
            {
              titleQuestions: "Царапины",
              id: 2,
              Answers: [
                { id: 0, titleAnswer: "Нет", valueAnswer: "true" },
                {
                  id: 1,
                  titleAnswer:
                    "Не более 9 царапин, которые не цепляются за ноготь (не глубокие царапины)",
                  valueAnswer: "false",
                },
                {
                  id: 2,
                  titleAnswer:
                    "Более 9 царапин, которые не цепляются за ноготь (не глубокие царапины)",
                  valueAnswer: "true",
                },
                {
                  id: 3,
                  titleAnswer:
                    "Царапины, которые цепляются за ноготь (глубокие царапины)",
                  valueAnswer: "false",
                },
              ],
            },
            {
              titleQuestions: "Сколы/Трещины/Отслоение краски на рамке дисплея",
              id: 3,
              Answers: [
                { id: 4, titleAnswer: "Да", valueAnswer: "true" },
                { id: 5, titleAnswer: "Нет", valueAnswer: "false" },
              ],
            },
            {
              titleQuestions:
                "Люфт дисплея/Дисплей отходит от корпуса/Видны следы клея",
              id: 4,
              Answers: [
                { id: 6, titleAnswer: "Да", valueAnswer: "true" },
                { id: 7, titleAnswer: "Нет", valueAnswer: "false" },
              ],
            },
            {
              titleQuestions:
                "Пятна, выгорание, остаточное изображение, битые пиксели",
              id: 5,
              Answers: [
                { id: 8, titleAnswer: "Да", valueAnswer: "true" },
                { id: 9, titleAnswer: "Нет", valueAnswer: "false" },
              ],
            },
            {
              titleQuestions:
                "Нарушение цветопередачи (Розовые блики при наклоне)",
              id: 6,
              Answers: [
                { id: 0, titleAnswer: "Да", valueAnswer: "true" },
                { id: 1, titleAnswer: "Нет", valueAnswer: "false" },
              ],
            },
          ],
        },
        {
          title: "Корпус",
          id: "Colapse",
          questionsBlocks: [
            {
              titleQuestions: "Царапины",
              id: 7,
              Answers: [
                { id: 0, titleAnswer: "Нет", valueAnswer: "true" },
                {
                  id: 1,
                  titleAnswer:
                    "Не более 2 царапин, которые не цепляются за ноготь (не глубокие царапины) ",
                  valueAnswer: "true",
                },
                {
                  id: 2,
                  titleAnswer:
                    "Царапины, которые не цепляются за ноготь, более 2 (не глубокие царапины)",
                  valueAnswer: "true",
                },
                {
                  id: 3,
                  titleAnswer:
                    "Царапины, которые цепляются за ноготь (глубокие царапины)",
                  valueAnswer: "false",
                },
              ],
            },
            {
              titleQuestions: "Потертости",
              id: 8,
              Answers: [
                { id: 4, titleAnswer: "Нет", valueAnswer: "true" },
                {
                  id: 5,
                  titleAnswer: "Незначительные потертости",
                  valueAnswer: "false",
                },
                {
                  id: 6,
                  titleAnswer: "Большое кол-во потертостей",
                  valueAnswer: "false",
                },
              ],
            },
            {
              titleQuestions: "Вмятины",
              id: 9,
              Answers: [
                { id: 7, titleAnswer: "Нет", valueAnswer: "true" },
                {
                  id: 8,
                  titleAnswer: "Не более 2мм не более 2шт",
                  valueAnswer: "false",
                },
                {
                  id: 9,
                  titleAnswer: "Не более 2мм более 2шт ",
                  valueAnswer: "false",
                },
                {
                  id: 10,
                  titleAnswer: "Более 2мм не более 2шт ",
                  valueAnswer: "false",
                },
                {
                  id: 11,
                  titleAnswer: "Более 2мм 3шт и более",
                  valueAnswer: "false",
                },
              ],
            },
            {
              titleQuestions: "Трещины/Сколы",
              id: 10,
              Answers: [
                { id: 12, titleAnswer: "Нет", valueAnswer: "true" },
                {
                  id: 13,
                  titleAnswer: "Трещины на корпусе не более 2мм",
                  valueAnswer: "false",
                },
                {
                  id: 14,
                  titleAnswer: "Трещины на корпусе более 2мм",
                  valueAnswer: "false",
                },

                {
                  id: 15,
                  titleAnswer: "Есть сколы",
                  valueAnswer: "false",
                },
              ],
            },
            {
              titleQuestions: "Изогнутый корпус/Отходит задняя крышка",
              id: 11,
              Answers: [
                { id: 16, titleAnswer: "Нет", valueAnswer: "true" },
                {
                  id: 17,
                  titleAnswer: "Да",
                  valueAnswer: "false",
                },
              ],
            },
            {
              titleQuestions: "Гравировка Live Demo Unit",
              id: 12,
              Answers: [
                { id: 18, titleAnswer: "Нет", valueAnswer: "true" },

                {
                  id: 19,
                  titleAnswer: "Да",
                  valueAnswer: "false",
                },
              ],
            },
          ],
        },
        {
          title: "Разъемы / слоты / камера",
          id: "Colapse",
          questionsBlocks: [
            {
              titleQuestions: "Сетка динамика повреждена или отсутствует",
              id: 13,
              Answers: [
                { id: 0, titleAnswer: "Да", valueAnswer: "true" },
                { id: 1, titleAnswer: "Нет", valueAnswer: "false" },
              ],
            },
            {
              titleQuestions:
                "Трещины/сколы или отсутствует стекло камеры или вспышки/Пыль, грязь, посторонние предметы под стеклом",
              id: 14,
              Answers: [
                { id: 2, titleAnswer: "Да", valueAnswer: "true" },
                { id: 3, titleAnswer: "Нет", valueAnswer: "false" },
              ],
            },
            {
              titleQuestions:
                "Устройство заряжается/Повреждение порта для зарядки или наушников (люфт/свободный ход, проблемы с соединением, трещины на портах, инородные тела в портах для зарядки или наушников)",
              id: 15,
              Answers: [
                {
                  id: 4,
                  titleAnswer: "Устройство заряжается, повреждений нет",
                  valueAnswer: "true",
                },
                {
                  id: 5,
                  titleAnswer: "Устройство заряжается, есть повреждения портов",
                  valueAnswer: "false",
                },
                {
                  id: 6,
                  titleAnswer: "Устройство не заряжается",
                  valueAnswer: "false",
                },
              ],
            },
            {
              titleQuestions: "Слот/лоток для СИМ имеет повреждения",
              id: 16,
              Answers: [
                { id: 7, titleAnswer: "Да", valueAnswer: "true" },
                { id: 8, titleAnswer: "Нет", valueAnswer: "false" },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    pushResult(idBlock, valueEl,e) {
      let vm = this;
      this.result[idBlock] = valueEl;
      console.log(e)
    },
  },
};
</script>
<style scoped>
.white{
  color:green
}
.blue{
  color:blue
}
</style>


