import { createRouter, createWebHashHistory } from "vue-router";
import VueRouter from "vue-router";

const guard = function (to, from, next) {
  // check for valid auth token
  if (
    localStorage.getItem("token") == null ||
    localStorage.getItem("token") == "" ||
    localStorage.getItem("token") == undefined
  ) {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
};

const NotFound = {
  template: ` <div class="container alert">
    <div class= "alert alert-danger" role="alert" >
    <h4 class="alert-heading">404 Такая страница не найдена!</h4>
    <p>
    Страница не найдена или временно недоступна!
    </p>
    <hr />
    <p class="mb-0">
      Пожалуйста проверьте ссылку или сообщите Администратору сервиса
          </p>
  </div >
</div > `,

  beforeRouteEnter(to, from, next) {
    // вызывается до подтверждения пути, соответствующего этому компоненту.
    // НЕ ИМЕЕТ доступа к контексту экземпляра компонента `this`,
    // так как к моменту вызова экземпляр ещё не создан!
    console.log(to, from);
    next();
  },
  beforeRouteUpdate(to, from, next) {
    // вызывается когда маршрут, что рендерит этот компонент изменился,
    // но этот компонент будет повторно использован в новом маршруте.
    // Например, для маршрута с динамическими параметрами `/foo/:id`, когда мы
    // перемещаемся между `/foo/1` и `/foo/2`, экземпляр того же компонента `Foo`
    // будет использован повторно, и этот хук будет вызван когда это случится.
    // Также имеется доступ в `this` к экземпляру компонента.
  },

  beforeRouteLeave(to, from, next) {
    // вызывается перед переходом от пути, соответствующего текущему компоненту;
    // имеет доступ к контексту экземпляра компонента `this`.
    console.log(to);
    next();
  },
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Applications.vue"),
    beforeEnter: (to, from, next) => {
      guard(to, from, next);
    },
  },
  {
    path: "/applications",
    name: "Applications",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Applications.vue"),
    beforeEnter: (to, from, next) => {
      guard(to, from, next);
    },
  },
  {
    path: "/price",
    name: "Price",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Price.vue"),

    beforeEnter: (to, from, next) => {
      guard(to, from, next);
    },
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/registrator",
    name: "Registrator",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Registrator.vue"),
  },
  {
    path: "/createApllication",
    name: "createApllication",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewApplication.vue"),
    beforeEnter: (to, from, next) => {
      guard(to, from, next);
    },
  },
  {
    path: "/ResultTesting",
    name: "ResultTesting",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ResultTestingPhone.vue"),
    beforeEnter: (to, from, next) => {
      guard(to, from, next);
    },
  },
  {
    path: "/ViewRequest/:id",
    name: "ViewRequest",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ViewRequest.vue"),
    beforeEnter: (to, from, next) => {
      guard(to, from, next);
    },
  },
  {
    path: "/CompletionTransaction",
    name: "CompletionTransaction",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/CompletionTransaction.vue"
      ),
    beforeEnter: (to, from, next) => {
      guard(to, from, next);
    },
  },
  {
    path: "/InfoDevice/",
    name: "InfoDevice",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/CreateApplicationComponents/InfoDevice.vue"
      ),
    beforeEnter: (to, from, next) => {
      guard(to, from, next);
    },
  },
  {
    path: "/InitialEstimate/",
    name: "InitialEstimate",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/CreateApplicationComponents/InitialEstimate.vue"
      ),
    beforeEnter: (to, from, next) => {
      guard(to, from, next);
    },
  },
  {
    path: "/VisualEstimate/",
    name: "VisualEstimate",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/CreateApplicationComponents/VisualEstimate.vue"
      ),
    beforeEnter: (to, from, next) => {
      guard(to, from, next);
    },
  },
  {
    path: "/TestFunctionDevice/",
    name: "TestFunctionDevice",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/CreateApplicationComponents/TestFunctionDevice.vue"
      ),
    beforeEnter: (to, from, next) => {
      guard(to, from, next);
    },
  },

  {
    // сопоставляется со всем
    path: "/:catchAll(.*)",
    name: "Error",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
