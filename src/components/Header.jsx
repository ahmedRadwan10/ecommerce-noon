import React from "react";

const Header = () => {
  return (
    <div className="_container_ w-full h-[65px] px-[15px] bg-yellow flex justify-between items-center">
      <div className="_container_ flex justify-between items-center w-1/6">
        <img className="_logo_ w-[86px] h-[24px]" src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" alt="Logo" />
        <div className="_container_">
          <div className="_container_ flex justify-between w-[132px]">
            <img src="https://f.nooncdn.com/s/app/com/common/images/flags/eg.svg" alt="Country Flag" />
            <div className="_container_ flex flex-col">
              <div className="_container_ flex items-center">
                <h3>Deliver to</h3>
                <img className="_dropDownArrow_" src="https://f.nooncdn.com/s/app/com/noon/icons/dropdownArrow.svg" alt="drop-down-arrow" />
              </div>
              <h3 className="_location_ font-bold">Cairo</h3>
           </div>
         </div>
        </div>
      </div>
      <input className="_search_ w-3/6 h-[36px] p-[15px] rounded-md border-none outline-none text-gray text-md" type="text" name="search" placeholder="What are you looking for?" autoComplete="off" />
      <div className="_container_ flex justify-evenly items-center text-sm w-1/6">
        <h3 className="_language_ text-fill">العربية</h3>
        <span className="_divider_ text-gray opacity-40">|</span>
        <div className="_container_ flex items-center">
          <h3 className="_signin_ font-bold text-fill mr-[5px]">Sign In</h3>
          <img className="_user_ h-[15px]" src="https://f.nooncdn.com/s/app/com/noon/icons/user_thin.svg" alt="User" />
        </div>
        <span className="_divider_ text-gray opacity-40">|</span>
        <div className="_container_ flex items-center">
          <h3 className="_cart_ font-bold text-fill mr-[5px]">Cart</h3>
          <img className="_cartIcon_ h-[20px]" src="https://f.nooncdn.com/s/app/com/noon/icons/cart.svg" alt="Cart" />
        </div>
      </div>
    </div>
  );
};

export default Header;
