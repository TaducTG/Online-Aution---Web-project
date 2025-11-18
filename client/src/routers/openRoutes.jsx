import Error from "../Error";
import { OpenLayout } from "../layout/OpenLayout";
import {About} from "../pages/About";
import { Contact } from "../pages/Contact";
import { Landing } from "../pages/Landing";
import AcceptableUsePolicy from "../pages/legal/AcceptableUsePolicy";
import CodeOfConduct from "../pages/legal/CodeOfConduct";
import DMCAPolicy from "../pages/legal/DMCAPolicy";
import Legal from "../pages/legal/Legal";
import PrivacyPolicy from "../pages/legal/PrivacyPolicy";
import TermsOfService from "../pages/legal/TermsOfService";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const openRoutes = [
  {
    path: "/", //đường dẫn gốc (root) — tương ứng với http://localhost:5173/
    element: <OpenLayout />, //Khi người dùng truy cập bất kỳ đường dẫn nào bắt đầu từ "/",React sẽ bọc toàn bộ nội dung bên trong layout chung này.
    errorElement: <Error />,
    children: [ //Các route con
      { //Trang Landing - trang đầu tiên được load khi truy cập /
        index: true, //đây là route mặc định khi truy cập "/"
        element: <Landing />,
        errorElement: <Error />,
      },
      { //Trang đăng nhập / đăng ký
        path: "login",
        element: <Login />,
        errorElement: <Error />,
      },
      {// đăng ký
        path: "signup",
        element: <Signup />,
        errorElement: <Error />,
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "Legal",
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Legal />,
            errorElement: <Error />,
          },
          {
            path: "terms-of-service",
            element: <TermsOfService />,
            errorElement: <Error />,
          },
          {
            path: "privacy-policy",
            element: <PrivacyPolicy />,
            errorElement: <Error />,
          },
          {
            path: "dmca",
            element: <DMCAPolicy />,
            errorElement: <Error />,
          },
          {
            path: "code-of-conduct",
            element: <CodeOfConduct />,
            errorElement: <Error />,
          },
          {
            path: "acceptable-use-policy",
            element: <AcceptableUsePolicy />,
            errorElement: <Error />,
          },
        ],
      },
    ],
  },
];
