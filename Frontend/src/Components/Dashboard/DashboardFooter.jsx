import React from 'react';


function DashboardFooter() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="footer-in">
          <p className="mb-4">
            All Rights Reserved &nbsp;
            <a href="https://www.suffixesolutions.com" style={{"textDecoration":"none" ,"color":"white"}}>Suffix E Solutions</a>&nbsp; &copy; &nbsp; 2007 - {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default DashboardFooter;
