import "./App.css";
import "./component/UI/Card/Card";

function App() {
  return (
    <div className="App">
      <Card>
        <sidebar className="App-sidebar">
          <SidebarHead></SidebarHead>
          <SidebarUnder></SidebarUnder>
        </sidebar>
        <MainFeed></MainFeed>
      </Card>
    </div>
  );
}

export default App;
