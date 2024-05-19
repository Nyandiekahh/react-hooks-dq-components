import React from "react";
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";
import AlbumList from "./AlbumList"; // Assuming this is another component

function App() {
  return (
    <div className="app-container">
      <TopMenu />
      <SideMenu />
      <AlbumList /> {/* Or any other component as per your hierarchy */}
    </div>
  );
}

export default App;
