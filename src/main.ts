import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import LoginScreen from "./pages/LoginScreen.vue";
import AddExam1 from "./pages/AddExam1.vue";
import EditGroupQuestion from "./pages/EditGroupQuestion.vue";
import AddGroupQuestion1 from "./pages/AddGroupQuestion1.vue";
import ExportExam from "./pages/ExportExam.vue";
import Homepage from "./pages/Homepage.vue";
import EditExam from "./pages/EditExam.vue";
import Settings from "./pages/Settings.vue";
import EditExam1 from "./pages/EditExam1.vue";
import AddExam from "./pages/AddExam.vue";
import PersonalInfo from "./pages/PersonalInfo.vue";
import Question from "./pages/Question.vue";
import ExamDetail from "./pages/ExamDetail.vue";
import SubjectList from "./pages/SubjectList.vue";
import AddQuestion from "./pages/AddQuestion.vue";
import RESET from "./pages/RESET.vue";
import AddGroupQuestion from "./pages/AddGroupQuestion.vue";
import ExamStatistic from "./pages/ExamStatistic.vue";
import ViewQuestion from "./pages/ViewQuestion.vue";
import ViewGroupQetion from "./pages/ViewGroupQetion.vue";
import EditExam2 from "./pages/EditExam2.vue";
import AddExam2 from "./pages/AddExam2.vue";
import EditQuestion from "./pages/EditQuestion.vue";
import DeleteConfirmQuestion from "./pages/DeleteConfirmQuestion.vue";
import Exam from "./pages/Exam.vue";
import "./global.css";

interface Route {
  path: string;
  name: string;
  component: any;
}

const routes: Route[] = [
  {
    path: "/",
    name: "LoginScreen",
    component: LoginScreen,
  },
  {
    path: "/addexam2",
    name: "AddExam1",
    component: AddExam1,
  },
  {
    path: "/editgroupquestion",
    name: "EditGroupQuestion",
    component: EditGroupQuestion,
  },
  {
    path: "/addgroupquestion2",
    name: "AddGroupQuestion1",
    component: AddGroupQuestion1,
  },
  {
    path: "/exportexam",
    name: "ExportExam",
    component: ExportExam,
  },
  {
    path: "/homepage",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/editexam1",
    name: "EditExam",
    component: EditExam,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/editexam2",
    name: "EditExam1",
    component: EditExam1,
  },
  {
    path: "/addexam1",
    name: "AddExam",
    component: AddExam,
  },
  {
    path: "/personal-info",
    name: "PersonalInfo",
    component: PersonalInfo,
  },
  {
    path: "/question",
    name: "Question",
    component: Question,
  },
  {
    path: "/examdetail",
    name: "ExamDetail",
    component: ExamDetail,
  },
  {
    path: "/subjectlist",
    name: "SubjectList",
    component: SubjectList,
  },
  {
    path: "/addquestion",
    name: "AddQuestion",
    component: AddQuestion,
  },
  {
    path: "/reset",
    name: "RESET",
    component: RESET,
  },
  {
    path: "/addgroupquestion1",
    name: "AddGroupQuestion",
    component: AddGroupQuestion,
  },
  {
    path: "/examstatistic",
    name: "ExamStatistic",
    component: ExamStatistic,
  },
  {
    path: "/viewquestion",
    name: "ViewQuestion",
    component: ViewQuestion,
  },
  {
    path: "/viewgroupqetion",
    name: "ViewGroupQetion",
    component: ViewGroupQetion,
  },
  {
    path: "/editexam3",
    name: "EditExam2",
    component: EditExam2,
  },
  {
    path: "/addexam3",
    name: "AddExam2",
    component: AddExam2,
  },
  {
    path: "/editquestion",
    name: "EditQuestion",
    component: EditQuestion,
  },
  {
    path: "/deleteconfirmquestion",
    name: "DeleteConfirmQuestion",
    component: DeleteConfirmQuestion,
  },
  {
    path: "/exam",
    name: "Exam",
    component: Exam,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, _, next) => {
  const metaTitle = toRoute?.meta?.title as string;
  const metaDesc = toRoute?.meta?.description as string;

  window.document.title = metaTitle || "Mockup-Design-TKPM---1";
  if (metaDesc) {
    addMetaTag(metaDesc);
  }
  next();
});

const addMetaTag = (value: string) => {
  const element = document.querySelector(`meta[name='description']`);
  if (element) {
    element.setAttribute("content", value);
  }
};

createApp(App).use(router).mount("#app");

export default router;
