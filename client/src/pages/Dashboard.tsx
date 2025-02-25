import Sidebar from "../components/Sidebar";


const Header = () => {
  return (
    <div className="flex justify-between p-4 border-b">
      <div>
        <h1 className="text-xl font-bold">General Knowledge & Methodology</h1>
        <p className="text-gray-500 text-sm">Page • English • Edited 28 Sep 2023</p>
      </div>
    </div>
  );
};

const TrainerList = () => {
  return (
    <div className="p-4">
      <h2 className="font-bold">Trainer</h2>
      <div className="mt-2">
        <p>Bagus Fikri - Project Manager</p>
        <p>Raihan Fikri - Project Manager</p>
        <p>Tea Assidida - Admin Dept.</p>
      </div>
      <button className="mt-2 text-yellow-500">+ Add Trainer</button>
    </div>
  );
};

const PageContent = () => {
  return (
    <div className="p-4">
      <h2 className="font-bold">Page Content</h2>
      <ul className="mt-2">
        <li>Design Introduction (2 chapters)</li>
        <li>Conducting a Heuristic Evaluation (5 chapters)</li>
        <li>Final Trough on UI Heuristic (2 chapters)</li>
      </ul>
      <button className="mt-2 text-yellow-500">+ Add Section</button>
    </div>
  );
};

const Assignees = () => {
  return (
    <div className="p-4 border-l w-64">
      <h2 className="font-bold">Assignees</h2>
      <ul className="mt-2">
        <li>Adit Irawan - Jr UI/UX Designer</li>
        <li>Arif Ariyanto - Jr UI/UX Designer</li>
        <li>Ardhi Mubarak - Jr UI/UX Designer</li>
      </ul>
      <button className="mt-2 text-yellow-500">+ Assign</button>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-1">
          <div className="flex-1">
            <TrainerList />
            <PageContent />
          </div>
          <Assignees />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
