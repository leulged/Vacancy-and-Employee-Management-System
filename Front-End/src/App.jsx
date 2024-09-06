import { useState } from "react";
import "./App.css";
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManagerPage from "../Pages/Manager/ManagerPage";
import Dashboard from "../Pages/Manager/Dashboard";
import CriteriaView from "../Pages/Manager/CriteriaView";
import ManageTeam from "../Pages/Manager/ManageTeam";
import Employee from "../Pages/Manager/Employee";
import CriteriaCreationForm from "../Pages/Team/CriteriaCreationForm";
import ViewPost from "../Pages/Human_Resource/ViewPost";
import ApplicantList from "../Pages/Manager/ApplicantList";
import HRPage from "../Pages/Human_Resource/HRPage";
import History from "../Pages/Team/History";
import TeamLeaderPage from "../Pages/Team/TeamLeaderPage";
import EditEmploye from "../Pages/Manager/Employe/EditEmploye";
import MainPage from "../Pages/JobPostPage/MainPage";
import AddEmploye from "../Pages/Manager/Employe/AddEmploye";
import Login from "../components/Login";
import ApplyForm from "../Pages/JobPostPage/ApplyForm";
import TeamMemberView from "../Pages/Manager/ManageTeam/TeamMemberView";

function App() {
  return (
    // <TeamMemberView></TeamMemberView>
    // <ApplyForm></ApplyForm>
    // <Login></Login>
    // <AddEmploye></AddEmploye>
    // <EditEmploye></EditEmploye>
    //  <MainPage></MainPage>

    //teams

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<TeamLeaderPage />}>
    //       <Route path="/Criteria" element={<CriteriaCreationForm />} />
    //       <Route path="/History" element={<History />} />
    //       <Route path="/ApplicantList" element={<ApplicantList />} />
    //     </Route>
    //   </Routes>
    // </Router>

    // human resources

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<HRPage />}>
    //       <Route path="/Criteria" element={<CriteriaCreationForm />} />
    //       <Route path="/History" element={<History />} />
    //       <Route path="/View-Post" element={<ViewPost />} />
    //       <Route path="/ApplicantList" element={<ApplicantList />} />
    //     </Route>
    //   </Routes>
    // </Router>

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<MainPage />} />
    //     <Route path="/ApplyForm" element={<ApplyForm />} />
    //   </Routes>
    // </Router>

    <Router>
      <Routes>
        <Route path="/" element={<ManagerPage />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Criteria" element={<CriteriaCreationForm />} />
          <Route path="/History" element={<History />} />
          <Route path="/View-Post" element={<ViewPost />} />
          <Route path="/ApplicantList" element={<ApplicantList />} />
          <Route path="/View-Criteria" element={<CriteriaView />} />
          <Route path="/ManageTeam" element={<ManageTeam />} />
          <Route path="/TeamMember" element={<TeamMemberView />}></Route>
          <Route path="/ManageEmployee" element={<Employee />} />
          <Route path="/ApplyForm" element={<ApplyForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
