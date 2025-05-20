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
import AddTeacherPage from "./pages/teachers/AddTeacherPage";
import EditTeacherPage from "./pages/teachers/EditTeacherPage";
import AddDomainPage from "./pages/domain/AddDomainPage";
import AddCoursePage from "./pages/course/AddCoursePage";
import AddModulePage from "./pages/module/AddModulePage";
import EditDomainPage from "./pages/domain/EditDomainPage";
import EditCoursePage from "./pages/course/EditCoursePage";
import EditModulePage from "./pages/module/EditModulePage";
import AddCommunityPage from "./pages/community/AddCommunityPage";
import AddSubCommunityPage from "./pages/subCommunity/AddSubCommunityPage";
import AddChatRoomPage from "./pages/chatroom/AddChatRoomPage";
import EditCommunityPage from "./pages/community/EditCommunityPage";
import EditSubCommunityPage from "./pages/subCommunity/EditSubCommunityPage";
import EditChatRoomPage from "./pages/chatroom/EditChatRoomPage";
import AddVideoPage from "./pages/videos/AddVideoPage";
import EditVideoPage from "./pages/videos/EditVideoPage";

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
          path: "teachers/new",
          element: <AddTeacherPage />,
        },
        {
          path: "teachers/:id/edit",
          element: <EditTeacherPage />,
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
          path: "domain/new",
          element: <AddDomainPage />,
        },
        {
          path: "domain/:id/edit",
          element: <EditDomainPage />,
        },
        {
          path: "domain/course",
          element: <CoursePage />,
        },
        {
          path: "domain/course/new",
          element: <AddCoursePage />,
        },
        {
          path: "domain/course/:id/edit",
          element: <EditCoursePage />,
        },

        {
          path: "domain/module",
          element: <ModulePage />,
        },
        {
          path: "domain/module/new",
          element: <AddModulePage />,
        },
        {
          path: "domain/module/:id/edit",
          element: <EditModulePage />,
        },

        {
          path: "community",
          element: <CommunityPage />,
        },
        {
          path: "community/new",
          element: <AddCommunityPage />,
        },
        {
          path: "community/:id/edit",
          element: <EditCommunityPage />,
        },
        {
          path: "community/subCommunity",
          element: <SubCommunityPage />,
        },
        {
          path: "community/subCommunity/new",
          element: <AddSubCommunityPage />,
        },
        {
          path: "community/subCommunity/:id/edit",
          element: <EditSubCommunityPage />,
        },
        {
          path: "community/chatroom",
          element: <ChatRoomPage />,
        },
        {
          path: "community/chatroom/new",
          element: <AddChatRoomPage />,
        },
        {
          path: "community/chatroom/:id/edit",
          element: <EditChatRoomPage />,
        },
        {
          path: "videos",
          element: <VideosPage />,
        },
        {
          path: "videos/new",
          element: <AddVideoPage />,
        },
        {
          path: "videos/:id/edit",
          element: <EditVideoPage />,
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
