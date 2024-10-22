
    import React, { useState } from "react";

    export const PopupToggle = () => {
      // State to track if the pop-up is visible
      const [isPopupVisible, setIsPopupVisible] = useState(false);
    
      // Toggle function to show/hide pop-up
      const togglePopup = () => {
        setIsPopupVisible((prev) => !prev);
      };
    
      return (
        <div className="relative">
          {/* Button to toggle the pop-up */}
          <button
            onClick={togglePopup}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            {isPopupVisible ? "Close Pop-up" : "Show Pop-up"}
          </button>
    
          {/* Conditional rendering of the pop-up */}
          {isPopupVisible && (
            <div className="absolute mt-4 w-64 p-4 bg-white shadow-lg border rounded-md">
              <p>This is a pop-up! Click the button again to close it.</p>
            </div>
          )}
        </div>
      );
    };
