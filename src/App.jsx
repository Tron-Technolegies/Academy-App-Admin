import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/errorPage/ErrorPage";

import TeachersPage from "./pages/teachers/TeachersPage";
import SubscriptionPage from "./pages/subscription/SubscriptionPage";
import DomainPage from "./pages/domain/DomainPage";
import CoursePage from "./pages/course/CoursePage";
import ModulePage from "./pages/module/ModulePage";
import CommunityPage from "./pages/community/CommunityPage";
import SubCommunityPage from "./pages/subCommunity/SubCommunityPage";
import ChatRoomPage from "./pages/chatRoom/ChatRoomPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import StudentsPage from "./pages/students/StudentsPage";
import VideosPage from "./pages/videos/VideosPage";
import LoginPage from "./pages/login/LoginPage";
import AddPlanPage from "./pages/subscription/AddPlanPage";
import EditPlanPage from "./pages/subscription/EditPlanPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <DashboardPage /> },

        {
          path: "teachers",
          element: <TeachersPage />,
        },
        {
          path: "students",
          element: <StudentsPage />,
        },
        {
          path: "subscription",
          element: <SubscriptionPage />,
        },
        {
          path: "subscription/new",
          element: <AddPlanPage />,
        },
        {
          path: "subscription/:id/edit",
          element: <EditPlanPage />,
        },
        {
          path: "domain",
          element: <DomainPage />,
        },
        {
          path: "course",
          element: <CoursePage />,
        },
        {
          path: "module",
          element: <ModulePage />,
        },
        {
          path: "community",
          element: <CommunityPage />,
        },
        {
          path: "subCommunity",
          element: <SubCommunityPage />,
        },
        {
          path: "chatroom",
          element: <ChatRoomPage />,
        },
        {
          path: "videos",
          element: <VideosPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
