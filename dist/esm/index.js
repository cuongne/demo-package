import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$5 = ".header-module_header__xOW2p {\n  position: sticky;\n  top: 0;\n  background-color: white;\n  z-index: 50;\n  height: 116px;\n}\n.header-module_header__xOW2p * {\n  font-family: 'Inter', sans-serif;\n}\n.header-module_headerShadow__q6x9W {\n  box-shadow: 0px 4px 4px 0px #75757526;\n}\n.header-module_container__eaqPg {\n  max-width: 1260px;\n  margin: 0 auto;\n  padding: 2rem 0;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-family: 'Inter', sans-serif;\n}\n.header-module_groupSearch__p7PDX {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 64px;\n}\n.header-module_groupSearchSticky__1rzbQ {\n  gap: 24px;\n}\n.header-module_containerSearch__1LzDI {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.header-module_logo__PLqHm {\n  width: 160px;\n  height: 30px;\n}\n.header-module_title__2RYyd {\n  font-size: 2rem;\n  color: #646cff;\n}\n.header-module_input__lDF-3 {\n  height: 2.5rem;\n  width: 100%;\n  border-radius: 9999px;\n  border: 1px solid #dd3f24;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  outline: none;\n  font-family: 'Inter', sans-serif;\n  font-weight: 400;\n}\n.header-module_input__lDF-3:focus {\n  border-color: #dd3f24;\n  outline: none;\n  box-shadow: none;\n}\n.header-module_button__xfBS1 {\n  position: absolute;\n  right: 0;\n  margin-left: 0.5rem;\n  border-radius: 0.5rem;\n  padding: 0.5rem 1rem;\n  color: #dd3f24;\n  border: none;\n  background-color: transparent;\n  animation: header-module_fadeIn__SHPf- 0.3s ease-in-out;\n}\n.header-module_item__wVEfv {\n  cursor: pointer;\n  overscroll-behavior: contain;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 0.625rem 1rem;\n  transition: all 0.2s ease;\n}\n.header-module_item__wVEfv:last-child {\n  border-bottom: 0;\n}\n.header-module_item__wVEfv:hover {\n  background-color: #e5e7eb;\n  color: #dd3f24;\n}\n.header-module_hiddenButtons__YuMTG {\n  margin-left: 1rem;\n  display: inline-flex;\n  gap: 0.25rem;\n  border-radius: 9999px;\n  border: 1px solid #dd3f24;\n  background-color: #fef4f2;\n  padding: 0.4rem 1.5rem;\n  font-weight: 500;\n  color: #dd3f24;\n  text-decoration: none;\n  font-family: 'Inter', sans-serif;\n  font-size: 14px;\n  animation: header-module_fadeIn__SHPf- 0.3s ease-in-out;\n}\n.header-module_iconWrapper__N8BMw {\n  display: inline-flex;\n  height: 1rem;\n  width: 1rem;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n}\n.header-module_hiddenEmployer__BxDoY {\n  margin-left: 0.5rem;\n  display: inline-flex;\n  gap: 0.25rem;\n  border-radius: 9999px;\n  border: 1px solid #dd3f24;\n  background-color: #fef4f2;\n  padding: 0.5rem 1.5rem;\n  font-weight: 500;\n  color: #dd3f24;\n  text-decoration: none;\n  font-family: 'Inter', sans-serif;\n  font-size: 14px;\n  animation: header-module_fadeIn__SHPf- 0.3s ease-in-out;\n}\n.header-module_loginButton__XXdaS {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  border-radius: 9999px;\n  background-color: #dd3f24;\n  padding: 0.5rem 1.5rem;\n  font-weight: 500;\n  color: white;\n  text-decoration: none;\n  font-size: 14px;\n  animation: header-module_fadeIn__SHPf- 0.3s ease-in-out;\n}\n.header-module_loginIcon__eMTnB {\n  height: 0.75rem;\n  width: 0.75rem;\n}\n.header-module_localeButton__Xl-jM {\n  width: 2rem;\n  height: 2rem;\n  text-transform: uppercase;\n  font-size: 0.875rem;\n  transition: all 0.2s;\n  background-color: #dd3f24;\n  border-radius: 9999px;\n  color: white;\n  padding: 2px;\n  border: none;\n  font-size: 14px;\n  animation: header-module_fadeIn__SHPf- 0.3s ease-in-out;\n}\n.header-module_containerSwitch__u4wkH {\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n}\n.header-module_divider__mTsWk {\n  margin-left: 1rem;\n  margin-right: 1rem;\n  height: 1.25rem;\n  width: 1px;\n  background-color: #dd3f24;\n}\n.header-module_dividerX__o4Yv- {\n  height: 1px;\n  width: 100%;\n  background-color: #dd3f24;\n  max-width: 1260px;\n  margin: 0 auto;\n  opacity: 1;\n  transition: opacity 0.3s ease-in-out;\n}\n.header-module_dividerHidden__kvocr {\n  height: 1px;\n  width: 100%;\n  margin: 0 auto;\n  opacity: 0;\n}\n.header-module_containerMenuScroll__1Q2Xk {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 3rem; /* gap-12 = 48px */\n  padding-left: 1rem; /* px-4 = 16px */\n  padding-right: 1rem;\n  padding-top: 0.5rem; /* py-2 = 8px */\n  padding-bottom: 0.5rem;\n  max-width: 1260px;\n  margin: 0 auto;\n  opacity: 1;\n  visibility: visible;\n  transition:\n    opacity 0.3s ease,\n    visibility 0.3s ease;\n}\n.header-module_containerMenuScrollHidden__y8zu6 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 3rem; /* gap-12 = 48px */\n  padding-left: 1rem; /* px-4 = 16px */\n  padding-right: 1rem;\n  padding-top: 0.5rem; /* py-2 = 8px */\n  padding-bottom: 0.5rem;\n  max-width: 1260px;\n  margin: 0 auto;\n  opacity: 1;\n  opacity: 0;\n  visibility: hidden;\n}\n.header-module_stickyMenu__OMYs- {\n  display: flex;\n  align-items: center;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  animation: header-module_fadeIn__SHPf- 0.3s ease-in-out;\n}\n.header-module_searchContainer__KqfEs {\n  margin: 0;\n}\n.header-module_searchContainerSticky__NFc77 {\n  margin-right: 0.5rem;\n  width: 315px;\n  animation: header-module_fadeIn__SHPf- 0.3s ease-in-out;\n}\n.header-module_searchContainerNonSticky__JFjHT {\n  margin: 0.25rem 0;\n  margin-left: 4rem;\n  width: 475px;\n  animation: header-module_fadeIn__SHPf- 0.3s ease-in-out;\n}\n.header-module_suggestContainer__NOjCW {\n  position: absolute;\n  left: 0;\n  top: 3rem; /* 12 * 0.25rem */\n  z-index: 20;\n  width: 88%;\n  transform: translateX(2%);\n  border: 1px solid #e3e3e3;\n  background-color: white;\n  padding: 0 1rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.header-module_suggestList__WbSW7 {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  max-height: 20rem;\n  overflow-y: auto;\n}\n.header-module_suggestList__WbSW7::-webkit-scrollbar {\n  width: 4px;\n}\n.header-module_suggestList__WbSW7::-webkit-scrollbar-track {\n  background: white;\n}\n.header-module_suggestList__WbSW7::-webkit-scrollbar-thumb {\n  background: #e7e7e7;\n}\n.header-module_suggestList__WbSW7::-webkit-scrollbar-thumb:hover {\n  background: #d1d1d1;\n}\n.header-module_suggestItem__D7fjm {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  text-align: left;\n  font-size: 0.875rem;\n  transition: all 0.3s;\n  background-color: transparent;\n}\n.header-module_suggestItem__D7fjm:hover {\n  background-color: #fef4f2;\n  color: var(--primary-color);\n}\n.header-module_buttonNotification__1dizw {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 32px;\n  width: 32px;\n  border-radius: 9999px;\n  background-color: #dd3f24;\n}\n.header-module_loginContainer__XPugo {\n  display: flex;\n  align-items: center;\n}\n.header-module_notificationContainer__grSCM {\n  position: relative;\n}\n.header-module_notificationDropdown__unOrI {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 0.5rem);\n  width: 320px;\n  background: white;\n  border-radius: 0.5rem;\n  box-shadow: 0px 0px 4px 0px #75757540;\n  z-index: 50;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(0.5rem);\n  transition: all 0.3s ease;\n}\n.header-module_notificationDropdownVisible__OxHSb {\n  visibility: visible;\n  opacity: 1;\n  transform: translateY(0);\n}\n.header-module_notificationHeader__hBGty {\n  padding: 1rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.header-module_notificationTitle__B-GW5 {\n  font-weight: 600;\n  color: #111827;\n}\n.header-module_notificationContent__J-TOI {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.header-module_emptyState__VaLXi {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n  text-align: center;\n}\n.header-module_emptyIcon__GI9Qv {\n  width: 48px;\n  height: 48px;\n  color: #9ca3af;\n  margin-bottom: 1rem;\n}\n.header-module_emptyText__RCLNO {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n@keyframes header-module_fadeIn__SHPf- {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@media (max-width: 1024px) {\n}\n@media (min-width: 1024px) {\n  .header-module_containerMenuScroll__1Q2Xk {\n    padding-top: 1rem; /* lg:py-4 = 16px */\n    padding-bottom: 1rem;\n  }\n  .header-module_searchContainerNonSticky__JFjHT {\n    margin-left: 0;\n    width: 475px;\n  }\n}\n";
var styles$5 = {"header":"header-module_header__xOW2p","headerShadow":"header-module_headerShadow__q6x9W header-module_header__xOW2p","container":"header-module_container__eaqPg","groupSearch":"header-module_groupSearch__p7PDX","groupSearchSticky":"header-module_groupSearchSticky__1rzbQ header-module_groupSearch__p7PDX","containerSearch":"header-module_containerSearch__1LzDI","logo":"header-module_logo__PLqHm","title":"header-module_title__2RYyd","input":"header-module_input__lDF-3","button":"header-module_button__xfBS1","fadeIn":"header-module_fadeIn__SHPf-","item":"header-module_item__wVEfv","hiddenButtons":"header-module_hiddenButtons__YuMTG","iconWrapper":"header-module_iconWrapper__N8BMw","hiddenEmployer":"header-module_hiddenEmployer__BxDoY","loginButton":"header-module_loginButton__XXdaS","loginIcon":"header-module_loginIcon__eMTnB","localeButton":"header-module_localeButton__Xl-jM","containerSwitch":"header-module_containerSwitch__u4wkH","divider":"header-module_divider__mTsWk","dividerX":"header-module_dividerX__o4Yv-","dividerHidden":"header-module_dividerHidden__kvocr","containerMenuScroll":"header-module_containerMenuScroll__1Q2Xk","containerMenuScrollHidden":"header-module_containerMenuScrollHidden__y8zu6","stickyMenu":"header-module_stickyMenu__OMYs-","searchContainer":"header-module_searchContainer__KqfEs","searchContainerSticky":"header-module_searchContainerSticky__NFc77","searchContainerNonSticky":"header-module_searchContainerNonSticky__JFjHT","suggestContainer":"header-module_suggestContainer__NOjCW","suggestList":"header-module_suggestList__WbSW7","suggestItem":"header-module_suggestItem__D7fjm","buttonNotification":"header-module_buttonNotification__1dizw","loginContainer":"header-module_loginContainer__XPugo","notificationContainer":"header-module_notificationContainer__grSCM","notificationDropdown":"header-module_notificationDropdown__unOrI","notificationDropdownVisible":"header-module_notificationDropdownVisible__OxHSb header-module_notificationDropdown__unOrI","notificationHeader":"header-module_notificationHeader__hBGty","notificationTitle":"header-module_notificationTitle__B-GW5","notificationContent":"header-module_notificationContent__J-TOI","emptyState":"header-module_emptyState__VaLXi","emptyIcon":"header-module_emptyIcon__GI9Qv","emptyText":"header-module_emptyText__RCLNO"};
styleInject(css_248z$5);

var css_248z$4 = ".HeaderMobile-module_headerMobile__OBi74 {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n  font-family: 'Inter', sans-serif;\n  position: sticky;\n  z-index: 50;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: white;\n  padding: 22px 28px;\n  box-shadow: 0px 2px 2px 0px #75757540;\n  transition: all 0.3s ease-in-out;\n}\n.HeaderMobile-module_headerMobileSticky__EkDcm {\n  padding: 22px 24px;\n}\n.HeaderMobile-module_containerImage__-p-2H {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  height: 20px;\n  width: 100%;\n}\n.HeaderMobile-module_logoLarge__h72jb {\n  width: 114px;\n  height: 20px;\n  transition: all 0.3s ease;\n}\n.HeaderMobile-module_logoSmall__DXQSi {\n  width: 24px;\n  height: 24px;\n  opacity: 0;\n  position: absolute;\n  left: 1rem;\n  transition: all 0.3s ease;\n}\n.HeaderMobile-module_logoLargeHidden__pwcG0 {\n  width: 0;\n  opacity: 0;\n  transform: translateY(10px);\n}\n.HeaderMobile-module_logoSmallVisible__hQ-js {\n  opacity: 1;\n  transform: translateY(0);\n}\n.HeaderMobile-module_notificationGroup__M4nlT {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.HeaderMobile-module_wrapperButton__SLd4U {\n  background-color: transparent;\n  color: var(--primary-color);\n}\n.HeaderMobile-module_menuList__lEJwB {\n  font-family: 'Inter', sans-serif;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  position: fixed;\n  z-index: 49;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: white;\n  border-top: 0.5px solid #fed2ca;\n}\n.HeaderMobile-module_menuList__lEJwB button {\n  padding: 0;\n}\n.HeaderMobile-module_menuItem__QxVqp {\n  width: 15%;\n  display: flex;\n  background: transparent;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.25rem;\n  color: #4f4f4f;\n  text-decoration: none;\n  font-size: 0.75rem;\n}\n.HeaderMobile-module_menuItemActive__3Ob9B {\n  color: #dd3f24;\n}\n.HeaderMobile-module_subMenuItem__hQ0gd {\n  display: flex;\n  background: transparent;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6d6d6d;\n  text-decoration: none;\n  font-size: 0.75rem;\n  height: 44px;\n  padding: 0 12px;\n}\n.HeaderMobile-module_subMenuItemActive__bedrf {\n  color: #dd3f24;\n  border-left: 4px solid #fdb1a4;\n  padding: 0 8px;\n}\n.HeaderMobile-module_menuIcon__HB-q5 {\n  width: 14px;\n  height: 14px;\n}\n.HeaderMobile-module_drawer__IhTt- {\n  position: fixed;\n  font-family: 'Inter', sans-serif;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: white;\n  z-index: 48;\n  border-radius: 16px 16px 0 0;\n  padding: 1rem;\n  transform: translateY(100%);\n  transition: transform 0.3s ease-in-out;\n  visibility: hidden;\n}\n.HeaderMobile-module_drawerOpen__oQkJ0 {\n  transform: translateY(0);\n  bottom: 6%;\n  visibility: visible;\n}\n.HeaderMobile-module_backdrop__gQQ8j {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s ease-in-out;\n}\n.HeaderMobile-module_backdropOpen__qQedk {\n  opacity: 1;\n  pointer-events: auto;\n}\n.HeaderMobile-module_wrapperStick__inMle {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.HeaderMobile-module_dragHandle__WClp8 {\n  width: 32px;\n  height: 4px;\n  border-radius: 100px;\n  background-color: #b0b0b0;\n}\n.HeaderMobile-module_accountContainer__xJhA2 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 0.5px solid #6d6d6d;\n  margin-bottom: 8px;\n}\n.HeaderMobile-module_information__0kGzq {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.HeaderMobile-module_avatar__aa2f0 {\n  width: 56px;\n  height: 52px;\n  border: 2px solid #dd3f24;\n  border-radius: 100%;\n}\n.HeaderMobile-module_avatar__aa2f0 img {\n  width: 100%;\n  height: 100%;\n}\n.HeaderMobile-module_hello__ELeSt {\n  font-size: 14px;\n  color: #5d5d5d;\n}\n.HeaderMobile-module_name__4u40M {\n  font-size: 20px;\n  color: #dd3f24;\n  font-weight: 500;\n}\n.HeaderMobile-module_email__vJrz5 {\n  font-size: 14px;\n  color: #888888;\n}\n.HeaderMobile-module_input__hhSHM {\n  height: 56px;\n  width: 100%;\n  border-radius: 9999px;\n  border: 1px solid #dd3f24;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  outline: none;\n  font-family: 'Inter', sans-serif;\n  font-weight: 400;\n}\n.HeaderMobile-module_input__hhSHM:focus {\n  border-color: #dd3f24;\n  outline: none;\n  box-shadow: none;\n}\n.HeaderMobile-module_input__hhSHM:focus {\n  border-color: #dd3f24;\n  outline: none;\n  box-shadow: none;\n}\n.HeaderMobile-module_inputSticky__sBPgN {\n  width: 100%;\n  height: 28px;\n}\n.HeaderMobile-module_containerSearch__h2YoZ {\n  height: 100%;\n  padding: 20px;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.HeaderMobile-module_hiddenSearch__wG1-i {\n  height: 100%;\n  width: 100%;\n  padding: 0 20px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n.HeaderMobile-module_containerSearchSticky__-i93P {\n  opacity: 1;\n}\n.HeaderMobile-module_button__-bWJj {\n  position: absolute;\n  right: 5%;\n  margin-left: 0.5rem;\n  border-radius: 0.5rem;\n  padding: 0.5rem 1rem;\n  color: #dd3f24;\n  border: none;\n  background-color: transparent;\n  animation: HeaderMobile-module_fadeIn__QBp6v 0.3s ease-in-out;\n}\n.HeaderMobile-module_buttonSticky__ruTcp {\n}\n.HeaderMobile-module_buttonSticky__ruTcp svg {\n  height: 12px;\n  width: 12px;\n}\n.HeaderMobile-module_suggestContainer__DLX0E {\n  position: absolute;\n  left: 0;\n  top: 3rem; /* 12 * 0.25rem */\n  z-index: 20;\n  width: 88%;\n  transform: translateX(2%);\n  border: 1px solid #e3e3e3;\n  background-color: white;\n  padding: 0 1rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.HeaderMobile-module_suggestList__9Ug2G {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  max-height: 20rem;\n  overflow-y: auto;\n}\n.HeaderMobile-module_suggestList__9Ug2G::-webkit-scrollbar {\n  width: 4px;\n}\n.HeaderMobile-module_suggestList__9Ug2G::-webkit-scrollbar-track {\n  background: white;\n}\n.HeaderMobile-module_suggestList__9Ug2G::-webkit-scrollbar-thumb {\n  background: #e7e7e7;\n}\n.HeaderMobile-module_suggestList__9Ug2G::-webkit-scrollbar-thumb:hover {\n  background: #d1d1d1;\n}\n.HeaderMobile-module_suggestItem__-FCOb {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  text-align: left;\n  font-size: 0.875rem;\n  transition: all 0.3s;\n}\n.HeaderMobile-module_suggestItem__-FCOb:hover {\n  background-color: #fef4f2;\n  color: var(--primary-color);\n}\n";
var styles$4 = {"headerMobile":"HeaderMobile-module_headerMobile__OBi74","headerMobileSticky":"HeaderMobile-module_headerMobileSticky__EkDcm HeaderMobile-module_headerMobile__OBi74","containerImage":"HeaderMobile-module_containerImage__-p-2H","logoLarge":"HeaderMobile-module_logoLarge__h72jb","logoSmall":"HeaderMobile-module_logoSmall__DXQSi","logoLargeHidden":"HeaderMobile-module_logoLargeHidden__pwcG0 HeaderMobile-module_logoLarge__h72jb","logoSmallVisible":"HeaderMobile-module_logoSmallVisible__hQ-js HeaderMobile-module_logoSmall__DXQSi","notificationGroup":"HeaderMobile-module_notificationGroup__M4nlT","wrapperButton":"HeaderMobile-module_wrapperButton__SLd4U","menuList":"HeaderMobile-module_menuList__lEJwB","menuItem":"HeaderMobile-module_menuItem__QxVqp","menuItemActive":"HeaderMobile-module_menuItemActive__3Ob9B HeaderMobile-module_menuItem__QxVqp","subMenuItem":"HeaderMobile-module_subMenuItem__hQ0gd","subMenuItemActive":"HeaderMobile-module_subMenuItemActive__bedrf HeaderMobile-module_subMenuItem__hQ0gd","menuIcon":"HeaderMobile-module_menuIcon__HB-q5","drawer":"HeaderMobile-module_drawer__IhTt-","drawerOpen":"HeaderMobile-module_drawerOpen__oQkJ0 HeaderMobile-module_drawer__IhTt-","backdrop":"HeaderMobile-module_backdrop__gQQ8j","backdropOpen":"HeaderMobile-module_backdropOpen__qQedk HeaderMobile-module_backdrop__gQQ8j","wrapperStick":"HeaderMobile-module_wrapperStick__inMle","dragHandle":"HeaderMobile-module_dragHandle__WClp8","accountContainer":"HeaderMobile-module_accountContainer__xJhA2","information":"HeaderMobile-module_information__0kGzq","avatar":"HeaderMobile-module_avatar__aa2f0","hello":"HeaderMobile-module_hello__ELeSt","name":"HeaderMobile-module_name__4u40M","email":"HeaderMobile-module_email__vJrz5","input":"HeaderMobile-module_input__hhSHM","inputSticky":"HeaderMobile-module_inputSticky__sBPgN HeaderMobile-module_input__hhSHM","containerSearch":"HeaderMobile-module_containerSearch__h2YoZ","hiddenSearch":"HeaderMobile-module_hiddenSearch__wG1-i","containerSearchSticky":"HeaderMobile-module_containerSearchSticky__-i93P HeaderMobile-module_hiddenSearch__wG1-i","button":"HeaderMobile-module_button__-bWJj","fadeIn":"HeaderMobile-module_fadeIn__QBp6v","buttonSticky":"HeaderMobile-module_buttonSticky__ruTcp HeaderMobile-module_button__-bWJj","suggestContainer":"HeaderMobile-module_suggestContainer__DLX0E","suggestList":"HeaderMobile-module_suggestList__9Ug2G","suggestItem":"HeaderMobile-module_suggestItem__-FCOb"};
styleInject(css_248z$4);

/*! js-cookie v3.0.5 | MIT */
/* eslint-disable no-var */
function assign (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target
}
/* eslint-enable no-var */

/* eslint-disable no-var */
var defaultConverter = {
  read: function (value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  },
  write: function (value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
};
/* eslint-enable no-var */

/* eslint-disable no-var */

function init (converter, defaultAttributes) {
  function set (name, value, attributes) {
    if (typeof document === 'undefined') {
      return
    }

    attributes = assign({}, defaultAttributes, attributes);

    if (typeof attributes.expires === 'number') {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }

    name = encodeURIComponent(name)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape);

    var stringifiedAttributes = '';
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue
      }

      stringifiedAttributes += '; ' + attributeName;

      if (attributes[attributeName] === true) {
        continue
      }

      // Considers RFC 6265 section 5.2:
      // ...
      // 3.  If the remaining unparsed-attributes contains a %x3B (";")
      //     character:
      // Consume the characters of the unparsed-attributes up to,
      // not including, the first %x3B (";") character.
      // ...
      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
    }

    return (document.cookie =
      name + '=' + converter.write(value, name) + stringifiedAttributes)
  }

  function get (name) {
    if (typeof document === 'undefined' || (arguments.length && !name)) {
      return
    }

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all.
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split('=');
      var value = parts.slice(1).join('=');

      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);

        if (name === found) {
          break
        }
      } catch (e) {}
    }

    return name ? jar[name] : jar
  }

  return Object.create(
    {
      set,
      get,
      remove: function (name, attributes) {
        set(
          name,
          '',
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function (attributes) {
        return init(this.converter, assign({}, this.attributes, attributes))
      },
      withConverter: function (converter) {
        return init(assign({}, this.converter, converter), this.attributes)
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  )
}

var api = init(defaultConverter, { path: '/' });

const SearchIcon = () => (jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M15.7832 14.3911L20 18.6069L18.6069 20L14.3911 15.7832C12.8224 17.0407 10.8713 17.7246 8.86088 17.7218C3.96968 17.7218 0 13.7521 0 8.86088C0 3.96968 3.96968 0 8.86088 0C13.7521 0 17.7218 3.96968 17.7218 8.86088C17.7246 10.8713 17.0407 12.8224 15.7832 14.3911ZM13.8082 13.6605C15.0574 12.3754 15.7552 10.6531 15.7527 8.86088C15.7527 5.05366 12.6681 1.96909 8.86088 1.96909C5.05366 1.96909 1.96909 5.05366 1.96909 8.86088C1.96909 12.6681 5.05366 15.7527 8.86088 15.7527C10.6531 15.7552 12.3754 15.0574 13.6605 13.8082L13.8082 13.6605Z", fill: "currentColor" }) }));
const FaPhoneAlt = () => (jsx("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 512 512", height: "16px", width: "16px", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" }) }));
const FaUser = () => (jsx("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 448 512", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" }) }));
const Employer = () => (jsxs("svg", { width: "13", height: "14", viewBox: "0 0 13 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M4.85305 0.519775C7.56091 0.824541 7.68098 3.62032 6.2354 5.47052C4.30477 7.9409 2.07845 4.37014 2.48495 2.42287C2.70592 1.36409 3.69103 0.541061 4.75757 0.519775H4.85305Z", fill: "currentColor" }), jsx("path", { d: "M10.8092 8.8139C11.4571 8.8139 12.4627 8.642 12.4627 9.47632L12.4579 12.8436C12.4579 13.3096 11.9984 13.4802 11.5593 13.4802C9.99112 13.4802 8.29934 13.4802 6.68325 13.4802C6.24386 13.4721 5.8083 13.2167 5.8083 12.7552C5.8083 11.7174 5.80734 10.5609 5.80734 9.53695C5.80734 8.67135 6.85313 8.80713 7.46495 8.81454V8.21953C7.46495 7.7835 7.88805 7.55872 8.18023 7.55872C8.5762 7.55872 9.80655 7.56775 10.1805 7.56775C10.4091 7.56775 10.8092 7.8351 10.8092 8.18727V8.81454V8.8139ZM10.2996 8.8139C10.2996 8.66426 10.305 8.35272 10.305 8.20727C10.305 8.04763 9.93013 8.05956 9.75035 8.05956C9.51373 8.05956 8.82495 8.05956 8.53277 8.05956C8.45421 8.05956 8.00652 8.04763 8.00652 8.20727V8.8139H10.2999H10.2996Z", fill: "currentColor" }), jsx("path", { d: "M0.154298 12.2238C0.0300815 12.2238 -0.0261194 12.0851 0.0115607 11.8542C0.312683 9.90627 0.434983 7.27658 2.74369 6.37873C2.93401 6.30455 3.35775 6.27649 3.49474 6.37324L4.8046 8.16991L6.06242 6.4171C6.19845 6.28294 6.46956 6.32035 6.64774 6.34099C7.03412 6.38614 7.81135 6.66704 8.06968 6.96342C8.09395 6.99148 8.1112 6.9989 8.10066 7.04437C7.47542 7.0834 7.00315 7.64487 6.92459 8.25312C6.3332 8.24925 5.76002 8.40598 5.45187 8.95327C5.39599 9.05228 5.26603 9.37446 5.26603 9.47347V12.2238H2.97265V10.4706C2.97265 10.3639 2.88228 10.2339 2.70186 10.2339C2.52144 10.2339 2.43107 10.3574 2.43107 10.4384V12.2238H0.154298Z", fill: "currentColor" })] }));
const Top100Icon = () => (jsxs("svg", { width: "9", height: "10", viewBox: "0 0 9 10", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M4.60853 0.000223614L4.79961 0.148927L5.24099 1.06575C5.6455 1.20797 6.61566 1.01499 6.46341 1.72295C6.27753 2.03646 5.93787 2.24442 5.71534 2.53668C5.73226 2.83543 5.83918 3.15475 5.86044 3.4488C5.88625 3.80458 5.66914 4.01254 5.32949 3.88485C5.06032 3.78356 4.77749 3.55614 4.50746 3.43964C4.22767 3.53758 3.88237 3.83901 3.6093 3.91012C3.33623 3.98123 3.12932 3.79429 3.13604 3.51186C3.14341 3.20193 3.27333 2.85175 3.28526 2.53646C3.1098 2.33789 2.9198 2.15408 2.73761 1.96199C2.70789 1.93069 2.66668 1.91481 2.63979 1.8844C2.44307 1.66257 2.47668 1.39155 2.7285 1.24017L3.75961 1.06552C3.89907 0.861139 4.09753 0.210645 4.26345 0.0793831C4.30314 0.0480771 4.35954 0.0431576 4.39207 0H4.60831L4.60853 0.000223614Z", fill: "currentColor" }), jsx("path", { d: "M9.00005 6.98399V9.39254C8.92587 9.68436 8.70464 9.93369 8.40273 9.96992C8.13204 10.0026 7.44493 10.0026 7.17424 9.96992C6.8656 9.9328 6.60772 9.65373 6.57713 9.33642C6.57713 8.51441 6.57605 7.83775 6.57605 7.08328C6.57605 6.71096 6.8502 6.43547 7.21437 6.40327C7.46661 6.3809 8.3305 6.37241 8.54089 6.4424C8.78858 6.52514 8.9313 6.73533 9.00005 6.98377V6.98399Z", fill: "currentColor" }), jsx("path", { d: "M7.59383 0.000223614C7.83437 0.0916819 7.93652 0.399823 7.75715 0.603312C7.71746 0.648258 7.41771 0.833411 7.3559 0.858679C7.06114 0.979207 6.80586 0.762078 6.86355 0.440073C6.90433 0.212434 7.2429 0.127907 7.39928 0H7.59405L7.59383 0.000223614Z", fill: "currentColor" }), jsx("path", { d: "M1.60157 0.000244141C1.85903 0.169073 2.31385 0.310621 2.09826 0.724755C1.9306 1.04654 1.56665 0.831642 1.35713 0.687188C1.06042 0.482804 1.08905 0.156551 1.40702 0.000244141H1.60179H1.60157Z", fill: "currentColor" }), jsx("path", { d: "M3.69463 4.62557C4.01064 4.58152 4.98991 4.58152 5.30593 4.62557C5.61934 4.6694 5.86378 4.95406 5.88568 5.27696L5.8846 9.33645C5.84361 9.68171 5.58399 9.94312 5.24737 9.97308C4.88082 10.0057 4.07115 10.0129 3.71284 9.96995C3.39575 9.93171 3.13591 9.64146 3.11487 9.31521L3.1179 5.23559C3.15803 4.9308 3.39423 4.66761 3.69441 4.62557H3.69463Z", fill: "currentColor" }), jsx("path", { d: "M0.57954 6.05312C0.83786 6.01712 1.58636 6.01712 1.84468 6.05312C2.15831 6.09695 2.40253 6.38161 2.42444 6.70451C2.42444 7.6314 2.4214 8.55269 2.4214 9.3568C2.4214 9.69156 2.10517 9.94491 1.78634 9.97331C1.50307 9.99858 0.853476 10.0051 0.579757 9.96682C0.265695 9.923 0 9.63632 0 9.31544C0 8.53346 0.00303651 7.51936 0.00303651 6.66314C0.0431618 6.35836 0.279359 6.09516 0.57954 6.05312Z", fill: "currentColor" }), jsx("path", { d: "M2.04816 3.48701C2.18437 3.62028 2.17678 3.88549 2.03905 4.01474C1.98613 4.06438 1.63216 4.27033 1.56752 4.28061C1.21247 4.33764 1.01249 3.90002 1.26604 3.65762C1.31983 3.60619 1.65884 3.40718 1.72521 3.39532C1.84211 3.37453 1.96097 3.40181 2.04794 3.48678L2.04816 3.48701Z", fill: "currentColor" }), jsx("path", { d: "M6.9523 4.00671C6.70894 3.76073 6.92041 3.34749 7.2566 3.39199C7.33468 3.40228 7.65568 3.59011 7.72184 3.64825C8.00835 3.8996 7.77085 4.3835 7.38348 4.26476C7.32405 4.24642 6.99611 4.05098 6.9523 4.00671Z", fill: "currentColor" }), jsx("path", { d: "M0.968443 1.7898C1.06778 1.77258 1.31547 1.77258 1.41763 1.78443C1.7549 1.82334 1.84903 2.27974 1.56577 2.45013C1.43932 2.52616 0.970395 2.52505 0.845247 2.44119C0.589963 2.27012 0.671949 1.84101 0.968443 1.7898Z", fill: "currentColor" }), jsx("path", { d: "M7.5451 1.7898C7.64444 1.77258 7.89213 1.77258 7.99429 1.78443C8.33156 1.82334 8.42569 2.27974 8.14243 2.45013C8.01598 2.52616 7.54705 2.52505 7.42191 2.44119C7.16662 2.27012 7.24861 1.84101 7.5451 1.7898Z", fill: "currentColor" })] }));
const ItGuy = () => (jsxs("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M9.9332 9.13168V9.85525C9.87892 9.92941 9.83584 9.97042 9.74718 10H0.19687C0.123747 9.97063 0.0350885 9.92837 0.0152024 9.84075C-0.00613378 9.7467 -0.00240514 9.29098 0.010438 9.18306C0.0236954 9.07202 0.115876 8.99414 0.227942 8.98709L9.69643 8.98627C9.81056 8.98212 9.87105 9.04924 9.9334 9.13168H9.9332Z", fill: "currentColor" }), jsx("path", { d: "M7.56613 8.40819L7.54376 8.36614C7.5593 8.32388 7.55432 8.27914 7.55867 8.23543C7.63594 7.45034 7.79751 6.66795 7.84019 5.881C7.81305 5.76437 7.73516 5.66743 7.626 5.61978C5.89632 5.56634 4.15276 5.61336 2.41791 5.59596C2.23313 5.61233 2.09538 5.77245 2.09703 5.95847C2.16664 6.71974 2.31019 7.47562 2.38497 8.23543C2.39015 8.28805 2.4148 8.37671 2.37751 8.4084H1.83997C1.76353 8.4084 1.65395 8.25262 1.6641 8.1708C1.6641 7.21005 1.66327 6.32201 1.66327 5.39979C1.66327 3.95474 4.07218 3.81471 5.14645 3.84081C6.18695 3.86608 8.27996 4.03677 8.27996 5.39979C8.27996 6.3013 8.27913 7.28525 8.27913 8.1708C8.28928 8.25262 8.1797 8.4084 8.10326 8.4084H7.56572L7.56613 8.40819Z", fill: "currentColor" }), jsx("path", { d: "M2.46037 5.90674H7.48347L7.51103 5.94092L7.1943 8.4911L7.13298 8.51244L2.75866 8.50229L2.72116 8.37427C2.67476 7.61218 2.47425 6.81674 2.42929 6.06148C2.42619 6.00803 2.41479 5.94092 2.45995 5.90674H2.46037ZM4.90491 6.90457C4.3307 6.9779 4.38911 7.86034 4.98114 7.85061C5.6293 7.83983 5.57171 6.81943 4.90491 6.90457Z", fill: "currentColor" }), jsx("path", { d: "M4.90552 0.000805143C7.14023 -0.0584389 6.7336 3.17057 5.20029 3.47901C3.39314 3.84235 2.59003 0.0623278 4.90552 0.000805143Z", fill: "currentColor" })] }));
const Gear = () => (jsxs("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M5.71304 0.000976529C5.80659 0.0439438 5.88178 0.0923797 5.91791 0.195501L6.0265 1.07106C6.16634 1.10074 6.30501 1.1443 6.43879 1.19469C6.65558 1.27613 6.85636 1.38765 7.06651 1.48276L7.78367 0.951335C7.92449 0.905242 8.01394 0.947233 8.11999 1.03336C8.32428 1.19937 8.81606 1.68686 8.97718 1.89115C9.04769 1.9804 9.08187 2.05403 9.06331 2.17258C9.0348 2.35695 8.60493 2.73819 8.51841 2.93447C8.61333 3.14481 8.72485 3.34559 8.80649 3.56218C8.85668 3.69577 8.90043 3.83444 8.93012 3.97447L9.80567 4.08306C9.90879 4.11939 9.95723 4.19439 10.0002 4.28794V5.69102C9.95723 5.78457 9.90879 5.85976 9.80567 5.89589L8.93012 6.00448C8.90043 6.14432 8.85688 6.28299 8.80649 6.41677C8.72504 6.63356 8.61352 6.83434 8.51841 7.04449C8.60493 7.24077 9.0348 7.622 9.06331 7.80637C9.08304 7.93391 9.04359 8.00441 8.96761 8.09796C8.83051 8.2669 8.24088 8.87001 8.07721 8.98094C7.9155 9.0907 7.81004 9.05301 7.66317 8.95321C7.4661 8.81942 7.2913 8.64365 7.09541 8.50694L7.03272 8.49971C6.71945 8.68212 6.38079 8.82606 6.02631 8.9079L5.92182 9.76822C5.87768 9.90279 5.78452 9.96646 5.64527 9.97876C5.32457 10.0071 4.69764 10.0071 4.37695 9.97876C4.23828 9.96646 4.14473 9.90337 4.1004 9.76822L3.99591 8.9079C3.76525 8.85399 3.53655 8.77529 3.32191 8.67568C3.26976 8.65146 3.01567 8.54092 3.02465 8.48975L4.17364 7.33666C4.3168 7.36401 4.45371 7.4142 4.59823 7.43842C6.27571 7.72005 7.75066 6.23104 7.46122 4.5559C7.41064 4.26314 7.24521 3.58171 6.82472 3.86979L5.49762 5.19416C5.4775 5.20842 5.45758 5.20217 5.4357 5.19982C5.37887 5.19377 5.0033 5.09553 4.9574 5.07307C4.91814 5.05393 4.87576 4.85706 4.86053 4.79827C4.84373 4.73324 4.78416 4.55023 4.80584 4.50238L6.12162 3.18622C6.37219 2.80381 5.94467 2.66573 5.64937 2.58683C3.91798 2.12415 2.26589 3.63952 2.56158 5.40177C2.5858 5.54629 2.63619 5.6832 2.66334 5.82636L1.51025 6.97535C1.45889 6.98453 1.34834 6.73024 1.32432 6.67809C1.22471 6.46345 1.1462 6.23475 1.0921 6.00409L0.231779 5.8996C0.0974088 5.85566 0.0335438 5.76269 0.0212395 5.62305C-0.00707984 5.30236 -0.00707984 4.67562 0.0212395 4.35473C0.0331532 4.22017 0.0909637 4.13209 0.216545 4.08228L1.0921 3.97369C1.12179 3.83385 1.16534 3.69519 1.21573 3.5614C1.29717 3.34461 1.40869 3.14384 1.50381 2.93369L0.972379 2.21653C0.926287 2.07571 0.968277 1.98626 1.05441 1.88021C1.22042 1.67592 1.7079 1.18414 1.91219 1.02301C2.00145 0.952506 2.07508 0.918328 2.19363 0.936882C2.47409 1.06832 2.69048 1.32027 2.95551 1.48179C3.16586 1.38687 3.36663 1.27535 3.58323 1.19371C3.71682 1.14352 3.85548 1.09977 3.99552 1.07008L4.10411 0.194525C4.14044 0.0914031 4.21543 0.0429673 4.30898 0H5.71206L5.71304 0.000976529Z", fill: "currentColor" }), jsx("path", { d: "M5.71301 0.000976562H10.0004V4.28833C9.9574 4.19478 9.90896 4.11959 9.80584 4.08345L8.93028 3.97486C8.9006 3.83503 8.85705 3.69636 8.80666 3.56257C8.72521 3.34578 8.61369 3.14501 8.51858 2.93486C8.6051 2.73858 9.03497 2.35734 9.06348 2.17297C9.08184 2.05442 9.04766 1.9806 8.97735 1.89154C8.81623 1.68744 8.32445 1.19996 8.12016 1.03375C8.01411 0.947624 7.92466 0.905633 7.78384 0.951725L7.06668 1.48315C6.85633 1.38823 6.65556 1.27671 6.43896 1.19508C6.30537 1.14488 6.16671 1.10113 6.02667 1.07145L5.91808 0.195892C5.88176 0.0927703 5.80676 0.0443345 5.71321 0.00136717L5.71301 0.000976562Z", fill: "white" }), jsx("path", { d: "M5.36227 3.1193L4.20254 4.30774C4.17305 4.37316 4.16973 4.4173 4.17832 4.48781C4.20039 4.66808 4.35097 5.20048 4.41738 5.37918C4.46132 5.49695 4.50429 5.53992 4.62206 5.58386C4.79783 5.64929 5.33629 5.80124 5.51343 5.82292C5.60288 5.83386 5.68276 5.82057 5.75229 5.76023L6.88194 4.63917C7.14365 5.97604 5.8935 7.15529 4.5703 6.84378C4.37148 6.79691 4.1625 6.63773 3.96817 6.74339L0.773166 9.92043C0.662232 9.99524 0.54583 10.0036 0.433334 9.92864C0.375523 9.89016 0.0661591 9.57338 0.0442848 9.51889C0.0040518 9.41967 0.0190903 9.32905 0.0724088 9.23921L3.19965 6.11099C3.40101 5.91471 3.23343 5.70573 3.17465 5.49207C2.80591 4.15325 4.00255 2.8529 5.36227 3.1195V3.1193Z", fill: "currentColor" })] }));
const Service = () => (jsxs("svg", { width: "12", height: "10", viewBox: "0 0 12 10", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M11.3728 3.69536V4.02696C11.0113 4.65004 10.0927 4.63532 9.45421 4.66642V4.25198C9.45421 4.1613 9.34074 3.81997 9.29992 3.71933C9.12522 3.28946 8.75825 2.87787 8.3412 2.67635C8.30085 2.61772 8.64147 2.39104 8.6982 2.35899C9.68967 1.79905 10.9187 2.28968 11.285 3.34524L11.3731 3.69536H11.3728Z", fill: "currentColor" }), jsx("path", { d: "M5.2614 0C5.85813 0.140757 6.14653 0.839321 5.7582 1.33779C5.42209 1.76932 4.77599 1.75887 4.44629 1.32449C4.06745 0.825554 4.36558 0.136959 4.95353 0H5.2614Z", fill: "currentColor" }), jsx("path", { d: "M9.7383 0C10.3367 0.138858 10.6227 0.840271 10.2351 1.33779C9.87265 1.80302 9.1615 1.74724 8.86646 1.23881C8.5764 0.738679 8.88426 0.129364 9.4302 0H9.73806H9.7383Z", fill: "currentColor" }), jsx("path", { d: "M4.46216 6.80565C4.38667 6.88516 4.43011 7.07672 4.56161 7.08479C5.22505 7.19801 6.00289 7.56331 6.65327 7.64615C7.28869 7.7271 7.73375 7.31313 7.72592 6.68198L9.99892 6.0297C10.3737 5.93381 11.1482 5.84028 11.2071 6.38504C11.2427 6.71474 11.0414 6.99008 10.778 7.16407C9.4988 7.60082 8.21631 8.24716 6.93241 8.64807C6.57446 8.75987 6.25117 8.83393 5.87732 8.75394C5.26136 8.6222 4.18705 8.12017 3.60741 8.23624C3.37408 8.283 3.18513 8.42637 2.96438 8.50494L2.01825 6.18541C2.48633 5.99932 2.93068 5.73062 3.39117 5.5329C4.04795 5.25115 4.43106 5.2388 5.06435 5.58725C5.17615 5.64873 5.30599 5.76504 5.4109 5.80919C5.8797 6.00691 6.55452 6.05035 7.03329 6.2476C7.65329 6.50301 7.44013 7.47573 6.63547 7.30862C5.96183 7.16881 5.27608 6.90795 4.59912 6.7615C4.56327 6.75343 4.48328 6.78333 4.46239 6.80541L4.46216 6.80565Z", fill: "currentColor" }), jsx("path", { d: "M7.12778 2.75456C8.08768 2.65629 8.97139 3.29647 9.11595 4.25827C9.18122 4.6917 9.0858 4.86663 8.68822 5.0494C8.00484 5.36344 6.57187 5.36747 5.90868 5.00193C5.57518 4.81821 5.5194 4.64826 5.57233 4.27868C5.68413 3.49989 6.3357 2.83574 7.12754 2.75456H7.12778Z", fill: "currentColor" }), jsx("path", { d: "M2.81368 9.56307C2.78425 9.59251 2.71232 9.62598 2.67221 9.64663C2.54071 9.71404 1.92855 9.97965 1.81342 9.99603C1.6805 10.0148 1.54022 9.96493 1.46141 9.85361L0.0191847 6.41633C-0.0380202 6.25872 0.0386486 6.0985 0.170386 6.00759C0.248004 5.95394 1.02276 5.62828 1.10608 5.61641C1.239 5.59766 1.37905 5.64751 1.45809 5.75883L2.91052 9.23314C2.94019 9.33758 2.88821 9.4883 2.81368 9.56307Z", fill: "currentColor" }), jsx("path", { d: "M5.23767 4.66635C4.74395 4.66683 3.6967 4.60084 3.39406 4.15317C3.21556 3.88946 3.38551 3.32856 3.52841 3.06343C4.09381 2.01285 5.52061 1.81394 6.37465 2.64092C5.94454 2.89585 5.58589 3.25071 5.39267 3.71974C5.3471 3.83059 5.23791 4.14605 5.23791 4.25191V4.66635H5.23767Z", fill: "currentColor" }), jsx("path", { d: "M7.22179 0.62181C8.34571 0.469422 8.51614 2.1521 7.45013 2.27126C6.35161 2.39397 6.18166 0.762805 7.22179 0.62181Z", fill: "currentColor" })] }));
const Design = () => (jsx("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M3.57143 0H6.42857V10H3.57143V0ZM0 10V3.57143H2.85714V10H0ZM1.42857 0C1.04969 0 0.686328 0.15051 0.418419 0.418419C0.15051 0.686328 0 1.04969 0 1.42857C0 1.80745 0.15051 2.17081 0.418419 2.43872C0.686328 2.70663 1.04969 2.85714 1.42857 2.85714C1.80745 2.85714 2.17081 2.70663 2.43872 2.43872C2.70663 2.17081 2.85714 1.80745 2.85714 1.42857C2.85714 1.04969 2.70663 0.686328 2.43872 0.418419C2.17081 0.15051 1.80745 0 1.42857 0ZM7.14286 0H10V2.85714H7.14286V0ZM10 3.57143H7.14286V6.42857H10V3.57143Z", fill: "currentColor" }) }));
const CreateCv = () => (jsxs("svg", { width: "12", height: "16", viewBox: "0 0 12 16", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M7.41384 0.612793L7.41268 3.54282C7.41268 4.51256 7.77091 5.17149 8.81322 5.17149L12 5.17206V13.9734C11.8843 14.7171 11.3281 15.2945 10.5717 15.387H1.42945C0.64042 15.282 0.0586931 14.672 0 13.8737L0.00144564 2.09949C0.00144564 1.18353 0.43485 0.612793 1.35688 0.612793H7.41413H7.41384ZM2.29453 7.11241C1.73911 7.10547 1.71685 7.97083 2.29453 7.97083L7.86112 7.97141C8.46164 7.97141 8.47234 7.10547 7.89004 7.10547L2.29482 7.11241H2.29453ZM2.29453 8.95907C1.75732 8.95213 1.69516 9.79147 2.29453 9.81807H9.70403C10.2866 9.8279 10.3043 8.95589 9.70692 8.95213L2.29453 8.95907ZM2.29453 10.8347C1.72812 10.828 1.72003 11.6647 2.29453 11.6647H9.70403C10.2901 11.6647 10.3225 10.828 9.70403 10.828L2.29453 10.8347ZM2.29453 12.6813C1.71049 12.6813 1.75357 13.54 2.29453 13.54L9.70403 13.5415C10.2803 13.5432 10.2967 12.6741 9.70403 12.6741L2.29453 12.6813Z", fill: "currentColor" }), jsx("path", { d: "M11.7405 4.33545H8.95701C8.49181 4.33545 8.2793 4.05905 8.2793 3.71498V0.872559L11.7405 4.33545Z", fill: "currentColor" })] }));
const ConvertCv = () => (jsxs("svg", { width: "12", height: "18", viewBox: "0 0 12 18", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M0.232793 2.35254H9.9942C10.1225 2.35254 10.2266 2.45663 10.2266 2.58495V15.8682C10.2266 15.9965 10.1225 16.1006 9.9942 16.1006H2.72311C2.59479 16.1006 2.49069 15.9965 2.49069 15.8682V15.1751C2.49069 15.0611 2.41575 14.9673 2.13223 14.9673C1.53568 14.9673 0.860766 14.9673 0.232036 14.9673C0.103716 14.9673 0 14.8632 0 14.7348V2.58495C0 2.45663 0.104094 2.35254 0.232414 2.35254H0.232793ZM1.64885 9.95219C1.24573 9.95219 1.19992 10.5124 1.64885 10.5124H5.48786C5.92051 10.5124 5.9735 9.9431 5.49164 9.9431L1.64923 9.95219H1.64885ZM1.64885 11.2361C1.21734 11.2361 1.21734 11.8331 1.64091 11.8331L8.39758 11.8338C8.83137 11.8338 8.83175 11.2274 8.40401 11.2274L1.64885 11.2365V11.2361ZM1.64885 13.1185L7.06782 13.0879C7.53568 13.0879 7.50009 12.5114 7.06328 12.5114H1.64885C1.25065 12.5114 1.16926 13.1185 1.64885 13.1185Z", fill: "currentColor" }), jsx("path", { d: "M11.9995 0.771965V15.4148C11.9995 15.5431 11.8954 15.6472 11.7671 15.6472H11.0619C10.9336 15.6472 10.8295 15.5431 10.8295 15.4148V1.9806C10.8295 1.85228 10.7254 1.74818 10.5971 1.74818H2.0061C1.87778 1.74818 1.77368 1.64409 1.77368 1.51577V0.771965C1.77368 0.643645 1.87778 0.539551 2.0061 0.539551H11.7675C11.8958 0.539551 11.9999 0.643645 11.9999 0.771965H11.9995Z", fill: "currentColor" }), jsx("path", { d: "M9.99372 16.7046H2.72301C2.59466 16.7046 2.4906 16.8086 2.4906 16.937V17.2277C2.4906 17.3561 2.59466 17.4601 2.72301 17.4601H9.99372C10.1221 17.4601 10.2261 17.3561 10.2261 17.2277V16.937C10.2261 16.8086 10.1221 16.7046 9.99372 16.7046Z", fill: "currentColor" }), jsx("path", { d: "M2.18366 15.6314V16.617C2.18366 16.935 1.79908 17.0944 1.57423 16.8691L0.58931 15.8835C0.364845 15.6586 0.523826 15.2744 0.841787 15.2744H1.82671C2.02392 15.2744 2.18366 15.4342 2.18366 15.6314Z", fill: "currentColor" })] }));
const Salary = () => (jsxs("svg", { width: "14", height: "12", viewBox: "0 0 14 12", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M13.4987 11.9997H0.499821C0.243722 11.9997 0 11.7979 0 11.5713V5.37035C0 5.13871 0.293232 4.94092 0.601789 4.94092H13.397C13.7265 4.94092 13.9988 5.14932 13.9988 5.4335L14 11.4844C14 11.7724 13.7734 12.0002 13.499 12.0002L13.4987 11.9997ZM2.49144 5.75355C2.30696 5.78992 2.35234 6.08825 2.29546 6.24108C2.1599 6.60533 1.76234 6.87916 1.3306 6.95165C1.19415 6.97464 1.01968 6.91553 0.953963 7.0575V9.88364C1.01556 10.0203 1.17558 9.96725 1.30113 9.98923C1.87698 10.0898 2.22356 10.3926 2.34497 10.8842C2.37002 10.986 2.31226 11.1131 2.44783 11.1742L11.482 11.1911C11.5407 11.1851 11.5987 11.1588 11.6238 11.111C11.6718 11.0204 11.658 10.8079 11.7193 10.6637C11.8492 10.3585 12.2044 10.0857 12.5751 10.0107C12.7133 9.98266 12.978 10.0087 13.0354 9.90107L13.0443 7.05724C12.9777 6.91503 12.8023 6.97414 12.6676 6.9514C12.1027 6.85617 11.752 6.5096 11.6491 6.0347C11.6288 5.94073 11.6818 5.82428 11.5504 5.76643L2.49115 5.7533L2.49144 5.75355Z", fill: "currentColor" }), jsx("path", { d: "M0.94104 4.63943L3.0753 1.43968C3.29309 1.20072 3.65705 1.15626 3.96089 1.30732L10.7049 4.63943H9.01392L4.93283 2.61733C4.69088 2.51982 4.62634 2.75929 4.48488 2.87473C4.25235 3.06418 3.9214 3.1531 3.60312 3.12683C3.37855 3.10839 3.2147 2.96744 3.00015 3.01392L1.89707 4.63943H0.94104Z", fill: "currentColor" }), jsx("path", { d: "M11.5136 4.63908L10.0448 1.91524C9.91569 1.68436 9.68671 1.87684 9.45625 1.89225C9.07401 1.91776 8.72715 1.79045 8.48726 1.53633C8.44158 1.48808 8.41152 1.42771 8.37203 1.37567C8.31485 1.30065 8.20198 1.27286 8.1065 1.30924L6.18855 2.0423L5.29382 1.63889L5.33125 1.58306L9.18482 0.0719784C9.53228 -0.0752903 9.89507 0.00478549 10.0928 0.285935L12.4104 4.63908H11.5133H11.5136Z", fill: "currentColor" }), jsx("path", { d: "M2.32312 4.63936L3.17482 3.33946C3.62955 3.4842 4.14912 3.45313 4.55021 3.20836C4.67841 3.13005 4.75916 3.0141 4.8959 2.9502L8.32245 4.63962H2.32312V4.63936Z", fill: "currentColor" }), jsx("path", { d: "M8.14298 1.61621C8.46362 2.10652 9.17563 2.28612 9.7895 2.14643L10.999 4.41204L6.55835 2.23181L8.14298 1.61621Z", fill: "currentColor" }), jsx("path", { d: "M12.7048 9.70598C11.9972 9.73604 11.3577 10.2844 11.3226 10.8907H2.67624C2.64117 10.2842 2.00136 9.73604 1.29407 9.70598L1.29819 7.27667C1.31705 7.22893 1.54221 7.21226 1.61147 7.1923C2.19675 7.0223 2.60433 6.60171 2.69009 6.07503L2.74991 6.05078L11.2749 6.05432C11.3323 6.07099 11.3435 6.24352 11.3668 6.30313C11.5357 6.7361 11.8843 7.04226 12.388 7.1923C12.4602 7.21377 12.6821 7.22868 12.7012 7.27667L12.7054 9.70598H12.7048ZM6.84632 6.71362C4.12943 6.89347 4.47718 10.4118 7.16048 10.2347C9.83523 10.0581 9.54819 6.53477 6.84632 6.71362Z", fill: "currentColor" }), jsx("path", { d: "M6.78671 7.01565C9.10722 6.78907 9.3754 9.78244 7.16039 9.93248C4.89646 10.0856 4.64066 7.22532 6.78671 7.01565Z", fill: "currentColor" })] }));
const Interview = () => (jsxs("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M6.03906 0.700195C8.33795 0.886339 10.4273 2.47923 11.0235 4.74042C11.9714 8.33648 9.0647 11.5787 5.46923 11.5179L4.66066 11.4334C3.96898 11.9986 2.95089 12.3332 2.05991 12.3636C1.79282 12.3726 1.54852 12.3703 1.42608 12.0906C1.22533 11.6321 1.73788 11.4276 1.98042 11.1181C2.05699 11.0208 2.32933 10.593 2.30245 10.4872C0.469941 9.17047 -0.41227 6.9309 0.185904 4.71734C0.784369 2.50231 2.879 0.855072 5.16416 0.700195H6.03906ZM5.44995 3.04117C4.53968 3.1186 3.69634 3.94179 3.73316 4.8839C3.75128 5.34415 4.30678 5.53614 4.57621 5.17028C4.70099 5.00079 4.64342 4.91926 4.67586 4.7451C4.89911 3.5508 6.67376 3.80006 6.53145 5.02592C6.45635 5.67436 5.80821 5.74537 5.45638 6.19597C5.21208 6.50894 4.9222 7.35491 5.34767 7.61528C5.6431 7.79616 6.0037 7.63515 6.06127 7.29618C6.07822 7.19565 6.05981 7.1001 6.08114 6.99519C6.15303 6.63956 6.60626 6.5028 6.85582 6.28305C8.17519 5.12119 7.22401 2.8895 5.44995 3.04058V3.04117ZM5.53615 8.16991C4.94645 8.25641 5.00227 9.35106 5.61505 9.33119C6.27167 9.30986 6.21702 8.06997 5.53615 8.16991Z", fill: "currentColor" }), jsx("path", { d: "M13.9999 7.63903V8.42627C13.9508 8.70885 13.9105 8.98733 13.8328 9.26494C13.5604 10.2345 12.9427 11.0881 12.1367 11.6816C12.1595 12.2158 13.1861 12.5521 12.7752 13.1053C12.5496 13.4092 11.9979 13.2818 11.6666 13.2228C11.0789 13.1181 10.5497 12.8958 10.071 12.5416C9.17538 12.6728 8.27067 12.5463 7.43872 12.2015L8.19615 11.9092C10.7373 10.8502 12.3878 8.24539 12.1043 5.46726C12.0605 5.0374 11.9421 4.6166 11.8425 4.19873C12.8305 4.8197 13.6031 5.81617 13.8749 6.96225C13.9202 7.15278 13.9847 7.45026 13.9999 7.63874V7.63903Z", fill: "currentColor" })] }));
const Blog = () => (jsxs("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M12 3.06299V10.7268C12 11.5665 11.6513 11.9635 10.8525 11.9635C7.67511 12.0407 4.4827 11.9788 1.29975 11.9948C0.462659 11.9948 0 11.6327 0 10.7268V3.06299H12ZM4.8335 4.45202C4.14057 4.45202 3.41218 4.45491 2.66252 4.45491C2.12135 4.45491 2.17282 5.28858 2.66935 5.28858L4.83954 5.29069C5.39122 5.29069 5.40224 4.45228 4.83377 4.45228L4.8335 4.45202ZM9.41966 6.7044H2.66935C2.11768 6.7044 2.11138 7.54779 2.65701 7.54438H9.42229C9.98499 7.54438 9.98499 6.7044 9.41966 6.7044ZM2.66935 8.93813C2.05886 8.93183 2.08827 9.78625 2.66935 9.7705H9.36689C9.90438 9.7705 9.9007 8.93183 9.36689 8.93183L2.66935 8.93813Z", fill: "currentColor" }), jsx("path", { d: "M12 2.2248H0V1.2685C0 0.399899 0.558237 0.000520675 1.29975 0.000520675L10.6257 -0.00341797C11.6366 -0.00341797 12 0.429308 12 1.2685V2.2248Z", fill: "currentColor" })] }));
const BsFire = () => (jsx("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 16 16", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" }) }));
const IoLocationSharp = () => (jsx("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 512 512", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z" }) }));
const BiSolidLike = () => (jsx("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 24 24", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z" }) }));
const IoBarChart = () => (jsxs("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 512 512", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M480 496H48a32 32 0 0 1-32-32V32a16 16 0 0 1 32 0v432h432a16 16 0 0 1 0 32z" }), jsx("path", { d: "M156 432h-40a36 36 0 0 1-36-36V244a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v152a36 36 0 0 1-36 36zm144 0h-40a36 36 0 0 1-36-36V196a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v200a36 36 0 0 1-36 36zm143.64 0h-40a36 36 0 0 1-36-36V132a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v264a36 36 0 0 1-36 36z" })] }));
const HiUsers = () => (jsx("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 20 20", "aria-hidden": "true", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" }) }));
const BsFillEmojiSmileFill = () => (jsx("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 16 16", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" }) }));
const WiStars = () => (jsx("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", version: "1.1", id: "Layer_1", x: "0px", y: "0px", viewBox: "0 0 30 30", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M5.37,16.18c0.65-0.03,1.2-0.28,1.65-0.75c0.45-0.47,0.68-1.03,0.68-1.68c0,0.65,0.22,1.21,0.67,1.68\nc0.45,0.47,1,0.72,1.65,0.75c-0.65,0.03-1.2,0.28-1.65,0.75c-0.45,0.47-0.67,1.03-0.67,1.68c0-0.65-0.22-1.21-0.68-1.68\nC6.57,16.46,6.02,16.21,5.37,16.18z M7.7,8.98c1.26-0.06,2.33-0.55,3.21-1.47c0.88-0.92,1.32-2.01,1.32-3.28\nc0,1.27,0.44,2.36,1.32,3.28s1.95,1.4,3.22,1.47c-0.83,0.04-1.59,0.27-2.29,0.71c-0.69,0.43-1.24,1.01-1.65,1.73\nc-0.4,0.72-0.6,1.49-0.6,2.33c0-1.27-0.44-2.37-1.32-3.29C10.03,9.53,8.96,9.04,7.7,8.98z M11.02,19.75\nc0.95-0.04,1.76-0.41,2.42-1.1c0.66-0.69,0.99-1.51,0.99-2.47c0,0.96,0.33,1.78,0.99,2.47c0.66,0.69,1.46,1.06,2.41,1.1\nc-0.95,0.04-1.75,0.41-2.41,1.1c-0.66,0.69-0.99,1.51-0.99,2.47c0-0.96-0.33-1.78-0.99-2.47C12.77,20.16,11.97,19.8,11.02,19.75z\n M17.83,15.01c0.95-0.04,1.75-0.41,2.41-1.1c0.66-0.69,0.98-1.51,0.98-2.48c0,0.96,0.33,1.78,0.99,2.47s1.47,1.06,2.42,1.1\nc-0.95,0.04-1.76,0.41-2.42,1.1c-0.66,0.69-0.99,1.51-0.99,2.47c0-0.96-0.33-1.78-0.98-2.47C19.58,15.42,18.78,15.05,17.83,15.01z" }) }));
const IoIosArrowDown = () => (jsx("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 512 512", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" }) }));
const IoIosArrowForward = () => (jsx("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 512 512", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" }) }));
const Notification$1 = () => (jsx("svg", { width: "14", height: "16", viewBox: "0 0 14 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M13.7057 11.0468C13.6452 10.9754 13.5858 10.9039 13.5276 10.835C12.7261 9.88464 12.2413 9.31107 12.2413 6.62071C12.2413 5.22786 11.9014 4.085 11.2315 3.22786C10.7376 2.59464 10.0698 2.11429 9.18975 1.75929C9.17843 1.75311 9.16831 1.74501 9.15988 1.73536C8.84333 0.696071 7.97708 0 7.00009 0C6.0231 0 5.15722 0.696071 4.84066 1.73429C4.83223 1.7436 4.82225 1.75144 4.81116 1.7575C2.75737 2.58643 1.75925 4.17679 1.75925 6.61964C1.75925 9.31107 1.27513 9.88464 0.472992 10.8339C0.414708 10.9029 0.355331 10.9729 0.294861 11.0457C0.13866 11.2304 0.0396932 11.4551 0.00967412 11.6932C-0.020345 11.9313 0.0198397 12.1729 0.125473 12.3893C0.350231 12.8536 0.829254 13.1418 1.37603 13.1418H12.6282C13.1724 13.1418 13.6481 12.8539 13.8736 12.3918C13.9797 12.1753 14.0203 11.9336 13.9905 11.6952C13.9607 11.4568 13.8619 11.2318 13.7057 11.0468ZM7.00009 16C7.52648 15.9996 8.04294 15.8595 8.4947 15.5946C8.94646 15.3297 9.31666 14.9498 9.56605 14.4954C9.5778 14.4736 9.5836 14.4492 9.5829 14.4246C9.58219 14.3999 9.575 14.3759 9.56202 14.3548C9.54904 14.3337 9.53072 14.3162 9.50883 14.3041C9.48694 14.292 9.46223 14.2857 9.4371 14.2857H4.56381C4.53865 14.2856 4.51389 14.2919 4.49195 14.304C4.47001 14.3161 4.45164 14.3335 4.43862 14.3546C4.4256 14.3758 4.41837 14.3998 4.41765 14.4245C4.41693 14.4491 4.42273 14.4735 4.43449 14.4954C4.68385 14.9498 5.054 15.3296 5.50569 15.5945C5.95737 15.8594 6.47376 15.9995 7.00009 16Z", fill: "currentColor" }) }));
const Hamburger = () => (jsx("svg", { width: "20", height: "14", viewBox: "0 0 20 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M1 1.85718H19M1 7.00003H19M1 12.1429H19", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const House = () => (jsx("svg", { width: "14", height: "15", viewBox: "0 0 14 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M0.5 12.9V5.7C0.5 5.44667 0.557687 5.20667 0.673062 4.98C0.788437 4.75333 0.947417 4.56667 1.15 4.42L6.025 0.82C6.30937 0.606667 6.63437 0.5 7 0.5C7.36562 0.5 7.69062 0.606667 7.975 0.82L12.85 4.42C13.0531 4.56667 13.2124 4.75333 13.3277 4.98C13.4431 5.20667 13.5005 5.44667 13.5 5.7V12.9C13.5 13.34 13.3407 13.7168 13.0222 14.0304C12.7037 14.344 12.3213 14.5005 11.875 14.5H9.4375C9.20729 14.5 9.01446 14.4232 8.859 14.2696C8.70354 14.116 8.62554 13.9261 8.625 13.7V9.7C8.625 9.47333 8.547 9.28347 8.391 9.1304C8.235 8.97733 8.04216 8.90053 7.8125 8.9H6.1875C5.95729 8.9 5.76446 8.9768 5.609 9.1304C5.45354 9.284 5.37554 9.47386 5.375 9.7V13.7C5.375 13.9267 5.297 14.1168 5.141 14.2704C4.985 14.424 4.79217 14.5005 4.5625 14.5H2.125C1.67812 14.5 1.29571 14.3435 0.97775 14.0304C0.659791 13.7173 0.500542 13.3405 0.5 12.9Z", fill: "currentColor" }) }));
const HotJob = () => (jsx("svg", { width: "13", height: "15", viewBox: "0 0 13 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M5.97686 1.01026L5.12531 0.5L4.96311 1.47929C4.70494 3.02561 3.64861 4.46244 2.48346 5.47215C0.202516 7.44965 -0.296927 9.59882 0.409322 11.3729C1.08516 13.0706 2.80043 14.233 4.54139 14.427L4.94418 14.4716C3.948 13.8627 3.30866 12.44 3.53169 11.377C3.75201 10.3321 4.50354 9.35349 5.94713 8.45057L6.675 7.9964L6.94669 8.81079C7.10686 9.29199 7.38395 9.67857 7.66578 10.0712C7.80095 10.2605 7.93814 10.4517 8.06385 10.6552C8.49841 11.3614 8.6133 12.1467 8.33283 12.926C8.07736 13.6343 7.65632 14.1911 7.07577 14.5L7.73133 14.427C9.36551 14.2452 10.5651 13.6863 11.3444 12.7516C12.1168 11.825 12.3878 10.6322 12.3878 9.36227C12.3878 8.17956 11.9019 6.96034 11.3288 5.94591C10.657 4.75778 9.78047 3.77106 8.82349 2.81475C8.65791 3.14591 8.67075 3.27972 8.33013 3.81161C7.8878 2.63697 7.05755 1.64864 5.97686 1.01026Z", fill: "currentColor" }) }));
const Companies = () => (jsxs("svg", { width: "16", height: "15", viewBox: "0 0 16 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.57143 0.5C1.27556 0.5 1.03571 0.741077 1.03571 1.03846C1.03571 1.33585 1.27556 1.57692 1.57143 1.57692V13.4231H1.03571C0.739847 13.4231 0.5 13.6642 0.5 13.9615C0.5 14.2589 0.739847 14.5 1.03571 14.5H10.1429V1.57692C10.4387 1.57692 10.6786 1.33585 10.6786 1.03846C10.6786 0.741077 10.4387 0.5 10.1429 0.5H1.57143ZM4.25 12.8846V11.2692C4.25 10.9718 4.48985 10.7308 4.78571 10.7308H6.92857C7.22444 10.7308 7.46429 10.9718 7.46429 11.2692V12.8846C7.46429 13.182 7.22444 13.4231 6.92857 13.4231H4.78571C4.48985 13.4231 4.25 13.182 4.25 12.8846ZM3.71429 3.73077C3.71429 3.43339 3.95413 3.19231 4.25 3.19231H4.78571C5.08158 3.19231 5.32143 3.43339 5.32143 3.73077C5.32143 4.02815 5.08158 4.26923 4.78571 4.26923H4.25C3.95413 4.26923 3.71429 4.02815 3.71429 3.73077ZM4.25 5.34615C3.95413 5.34615 3.71429 5.58723 3.71429 5.88462C3.71429 6.182 3.95413 6.42308 4.25 6.42308H4.78571C5.08158 6.42308 5.32143 6.182 5.32143 5.88462C5.32143 5.58723 5.08158 5.34615 4.78571 5.34615H4.25ZM3.71429 8.03846C3.71429 7.74108 3.95413 7.5 4.25 7.5H4.78571C5.08158 7.5 5.32143 7.74108 5.32143 8.03846C5.32143 8.33585 5.08158 8.57692 4.78571 8.57692H4.25C3.95413 8.57692 3.71429 8.33585 3.71429 8.03846ZM6.92857 3.19231C6.6327 3.19231 6.39286 3.43339 6.39286 3.73077C6.39286 4.02815 6.6327 4.26923 6.92857 4.26923H7.46429C7.76015 4.26923 8 4.02815 8 3.73077C8 3.43339 7.76015 3.19231 7.46429 3.19231H6.92857ZM6.39286 5.88462C6.39286 5.58723 6.6327 5.34615 6.92857 5.34615H7.46429C7.76015 5.34615 8 5.58723 8 5.88462C8 6.182 7.76015 6.42308 7.46429 6.42308H6.92857C6.6327 6.42308 6.39286 6.182 6.39286 5.88462ZM6.92857 7.5C6.6327 7.5 6.39286 7.74108 6.39286 8.03846C6.39286 8.33585 6.6327 8.57692 6.92857 8.57692H7.46429C7.76015 8.57692 8 8.33585 8 8.03846C8 7.74108 7.76015 7.5 7.46429 7.5H6.92857Z", fill: "currentColor" }), jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.2143 3.73077V14.5H14.9643C15.2602 14.5 15.5 14.2589 15.5 13.9615C15.5 13.6642 15.2602 13.4231 14.9643 13.4231H14.4286V4.80769C14.7244 4.80769 14.9643 4.56661 14.9643 4.26923C14.9643 3.97185 14.7244 3.73077 14.4286 3.73077H11.2143ZM12.2857 6.96154C12.2857 6.66415 12.5256 6.42308 12.8214 6.42308H12.8268C13.1227 6.42308 13.3625 6.66415 13.3625 6.96154V6.96692C13.3625 7.26431 13.1227 7.50538 12.8268 7.50538H12.8214C12.5256 7.50538 12.2857 7.26431 12.2857 6.96692V6.96154ZM12.8214 8.57692C12.5256 8.57692 12.2857 8.818 12.2857 9.11539V9.12077C12.2857 9.41815 12.5256 9.65923 12.8214 9.65923H12.8268C13.1227 9.65923 13.3625 9.41815 13.3625 9.12077V9.11539C13.3625 8.818 13.1227 8.57692 12.8268 8.57692H12.8214ZM12.2857 11.2692C12.2857 10.9718 12.5256 10.7308 12.8214 10.7308H12.8268C13.1227 10.7308 13.3625 10.9718 13.3625 11.2692V11.2746C13.3625 11.572 13.1227 11.8131 12.8268 11.8131H12.8214C12.5256 11.8131 12.2857 11.572 12.2857 11.2746V11.2692Z", fill: "currentColor" })] }));
const Tools = () => (jsxs("svg", { width: "100%", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M2.49259 14.5001C2.40574 14.5001 2.32026 14.4771 2.24519 14.4333L2.18245 14.3966C2.14519 14.3749 2.11122 14.3484 2.08081 14.3177C1.56985 13.8001 0.953958 13.2031 0.38656 12.624C0.356423 12.5933 0.334232 12.564 0.315602 12.5336C0.271218 12.4599 0.250122 12.3747 0.250122 12.2886V12.2577C0.250122 12.1653 0.276149 12.0749 0.325191 11.9968L0.384369 11.9026C0.404095 11.8714 0.427108 11.8423 0.453136 11.8163L11.403 0.872463C11.4214 0.854107 11.4411 0.836846 11.4625 0.821778C11.7608 0.613559 12.0148 0.660134 12.2646 0.910271C12.6934 1.33904 13.4279 2.07356 13.84 2.48561C14.1085 2.75411 14.1362 3.01794 13.8994 3.32589C13.8871 3.34178 13.8734 3.35685 13.8592 3.37109L2.93368 14.2971C2.90766 14.3231 2.87862 14.3462 2.84766 14.3659L2.75341 14.4251C2.67533 14.4741 2.58492 14.5001 2.49259 14.5001ZM11.4551 2.38315L9.66382 4.17438C9.47368 4.36452 9.47204 4.67219 9.65999 4.86424L9.86738 5.0763C10.0578 5.27082 10.3704 5.27329 10.5635 5.0815L12.3641 3.2952C12.557 3.10397 12.5575 2.79219 12.3655 2.60013L12.1485 2.38315C11.957 2.19164 11.6463 2.19164 11.4548 2.38315H11.4551Z", fill: "currentColor" }), jsx("path", { d: "M5.46193 2.68511L7.05946 3.18374L7.12686 3.23936L5.46193 3.73936L4.93536 5.40374L4.43563 3.73908L2.83645 3.2421L2.7981 3.18511L4.42796 2.69141L4.93536 1.04785L4.99125 1.11497L5.46193 2.68511Z", fill: "currentColor" }), jsx("path", { d: "M7.95481 1.31589C8.21344 1.38877 8.47289 1.46301 8.73043 1.54055C8.76961 1.55233 8.77865 1.52356 8.77098 1.59562L7.95372 1.81973L7.68851 2.63671L7.44166 1.84274L6.63399 1.59534C6.6255 1.52849 6.63399 1.55178 6.67235 1.53808C6.79673 1.4926 7.39372 1.35178 7.44193 1.29397L7.67563 0.5C7.71454 0.503014 7.71865 0.540274 7.73125 0.567397C7.7844 0.682466 7.92276 1.28329 7.95536 1.31589H7.95481Z", fill: "currentColor" }), jsx("path", { d: "M13.2088 5.979L13.434 6.79517C13.4666 6.82777 14.0674 6.96612 14.1825 7.01927C14.2096 7.03188 14.2469 7.03599 14.2499 7.07489L13.4559 7.30859C13.3981 7.35681 13.257 7.95379 13.2118 8.07818C13.1978 8.11626 13.2214 8.12475 13.1545 8.11654L12.9071 7.30886L12.1132 7.06201L12.9301 6.79681C12.9948 6.53571 13.0759 6.2779 13.1537 6.0201C13.1655 5.98092 13.1367 5.97188 13.2088 5.97955V5.979Z", fill: "currentColor" }), jsx("path", { d: "M2.4756 1.31562C2.70491 1.40274 3.00491 1.43918 3.22354 1.54C3.25066 1.5526 3.28792 1.55589 3.29121 1.59534L2.4756 1.82082L2.20875 2.63644L1.94217 1.8211L1.15423 1.59534C1.14299 1.52493 1.16108 1.55288 1.19286 1.53836C1.40519 1.44082 1.71916 1.40959 1.94245 1.31534L2.1956 0.5C2.23724 0.503836 2.23751 0.54137 2.24847 0.569863C2.28902 0.674247 2.44464 1.29014 2.4756 1.31562Z", fill: "currentColor" })] }));
const Account = () => (jsx("svg", { width: "14", height: "15", viewBox: "0 0 14 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M7 7.5C6.0375 7.5 5.21354 7.15729 4.52812 6.47187C3.84271 5.78646 3.5 4.9625 3.5 4C3.5 3.0375 3.84271 2.21354 4.52812 1.52813C5.21354 0.842708 6.0375 0.5 7 0.5C7.9625 0.5 8.78646 0.842708 9.47187 1.52813C10.1573 2.21354 10.5 3.0375 10.5 4C10.5 4.9625 10.1573 5.78646 9.47187 6.47187C8.78646 7.15729 7.9625 7.5 7 7.5ZM0 14.5V12.05C0 11.5542 0.12775 11.0986 0.38325 10.6832C0.63875 10.2679 0.977666 9.95058 1.4 9.73125C2.30417 9.27917 3.22292 8.94025 4.15625 8.7145C5.08958 8.48875 6.0375 8.37558 7 8.375C7.9625 8.37442 8.91042 8.48758 9.84375 8.7145C10.7771 8.94142 11.6958 9.28033 12.6 9.73125C13.0229 9.95 13.3621 10.2673 13.6176 10.6832C13.8731 11.0992 14.0006 11.5548 14 12.05V14.5H0Z", fill: "currentColor" }) }));
const Dashboard = () => (jsxs("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxs("g", { "clip-path": "url(#clip0_309_623)", children: [jsx("path", { d: "M13.0903 0.5H0.909733C0.407301 0.5 0 0.89973 0 1.39282V5.80339C0 6.29648 0.407301 6.69621 0.909733 6.69621H13.0903C13.5927 6.69621 14 6.29648 14 5.80339V1.39282C14 0.89973 13.5927 0.5 13.0903 0.5Z", fill: "currentColor" }), jsx("path", { d: "M5.76325 7.30371H0.909733C0.407301 7.30371 0 7.70344 0 8.19653V12.6071C0 13.1002 0.407301 13.4999 0.909733 13.4999H5.76325C6.26568 13.4999 6.67298 13.1002 6.67298 12.6071V8.19653C6.67298 7.70344 6.26568 7.30371 5.76325 7.30371Z", fill: "currentColor" }), jsx("path", { d: "M13.0903 7.30371H8.23674C7.73431 7.30371 7.32701 7.70344 7.32701 8.19653V12.6071C7.32701 13.1002 7.73431 13.4999 8.23674 13.4999H13.0903C13.5927 13.4999 14 13.1002 14 12.6071V8.19653C14 7.70344 13.5927 7.30371 13.0903 7.30371Z", fill: "currentColor" })] }), jsx("defs", { children: jsx("clipPath", { id: "clip0_309_623", children: jsx("rect", { width: "14", height: "13", fill: "white", transform: "translate(0 0.5)" }) }) })] }));
const CvManagement = () => (jsx("svg", { width: "14", height: "16", viewBox: "0 0 14 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M12.2146 0.222168C12.9113 0.337627 13.5271 0.713433 13.8163 1.30787C13.9055 1.49092 13.9395 1.6785 14 1.86802V14.1322C13.8503 15.0116 13.1164 15.6907 12.1247 15.7777H1.87674C0.840988 15.6801 0.0766162 14.9601 0 14.0206L0.0017901 1.9492C0.0637275 1.10476 0.844926 0.313694 1.78688 0.222168H12.2146ZM8.57206 5.9343C8.54199 5.89711 8.82304 5.54847 8.86385 5.47247C9.68192 3.9521 8.17645 2.29687 6.36559 2.73057C5.27721 2.99124 4.63134 4.01678 4.83828 5.00061C4.90344 5.31108 5.09068 5.65099 5.3216 5.88708V5.9343C4.44517 6.23993 3.73128 6.93785 3.39295 7.72537C3.22218 8.12252 2.91858 8.9469 3.54296 8.9469L10.0911 8.96986C10.9228 8.96986 10.6536 8.29393 10.4653 7.82207C10.1427 7.01386 9.43525 6.29717 8.57206 5.93398V5.9343ZM2.54445 10.4304C1.8907 10.4304 1.94082 11.3896 2.54445 11.3896H11.4244C12.1014 11.3896 12.1064 10.421 11.4244 10.421L2.54445 10.4301V10.4304ZM2.54445 12.3971C1.86564 12.3971 1.90252 13.3573 2.54445 13.3573L11.4244 13.3589C12.1265 13.3589 12.1365 12.3887 11.4119 12.3887L2.54445 12.3968V12.3971Z", fill: "currentColor" }) }));
const AppliedJobs = () => (jsxs("svg", { width: "100%", height: "18", viewBox: "0 0 15 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M1 1.48077C1 0.939105 1.43652 0.5 1.975 0.5H5.875H6.2C10.5078 0.5 14 4.01284 14 8.34615V8.67308V16.5192C14 17.0609 13.5635 17.5 13.025 17.5H1.975C1.43652 17.5 1 17.0609 1 16.5192V1.48077Z", fill: "currentColor" }), jsx("path", { d: "M5.875 0.5H1.975C1.43652 0.5 1 0.939105 1 1.48077V16.5192C1 17.0609 1.43652 17.5 1.975 17.5H13.025C13.5635 17.5 14 17.0609 14 16.5192V8.67308M5.875 0.5H6.2C10.5078 0.5 14 4.01284 14 8.34615V8.67308M5.875 0.5C7.49043 0.5 8.8 1.81732 8.8 3.44231V4.75C8.8 5.29166 9.23652 5.73077 9.775 5.73077H11.075C12.6904 5.73077 14 7.04809 14 8.67308M4.9 11.6154L6.85 13.5769L10.1 9", stroke: "#FEF4F2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
const FollowingJobs = () => (jsxs("svg", { width: "16", height: "18", viewBox: "0 0 16 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M1 3.18182C1 1.97683 1.85473 1 2.90909 1H4.18182H11.8182H13.0909C14.1453 1 15 1.97683 15 3.18182V14.8182C15 16.0232 14.1453 17 13.0909 17H2.90909C1.85473 17 1 16.0232 1 14.8182V3.18182Z", fill: "currentColor" }), jsx("path", { d: "M11.8182 1V13.3636L8 11.1818L4.18182 13.3636V1M11.8182 1H13.0909C14.1453 1 15 1.97683 15 3.18182V14.8182C15 16.0232 14.1453 17 13.0909 17H2.90909C1.85473 17 1 16.0232 1 14.8182V3.18182C1 1.97683 1.85473 1 2.90909 1H4.18182M11.8182 1H4.18182", stroke: "#FEF4F2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
const Setting = () => (jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxs("mask", { id: "mask0_309_646", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "16", height: "16", children: [jsx("path", { d: "M12.4401 4.90985C12.8861 5.54935 13.1881 6.27801 13.3252 7.04555H15V8.95445H13.3252C13.1881 9.72199 12.8861 10.4506 12.4401 11.0901L13.6248 12.2749L12.2749 13.6248L11.0901 12.4401C10.4506 12.8861 9.72199 13.1881 8.95445 13.3252V15H7.04555V13.3252C6.27801 13.1881 5.54935 12.8861 4.90985 12.4401L3.7251 13.6248L2.37515 12.2749L3.5599 11.0901C3.11385 10.4506 2.81186 9.72199 2.67475 8.95445H1V7.04555H2.67475C2.81186 6.27801 3.11385 5.54935 3.5599 4.90985L2.37515 3.7251L3.7251 2.37515L4.90985 3.5599C5.54935 3.11385 6.27801 2.81186 7.04555 2.67475V1H8.95445V2.67475C9.72199 2.81186 10.4506 3.11385 11.0901 3.5599L12.2749 2.37515L13.6248 3.7251L12.4401 4.90985Z", fill: "white", stroke: "white", strokeWidth: "2", strokeLinejoin: "round" }), jsx("path", { d: "M8 9.75C8.46413 9.75 8.90925 9.56563 9.23744 9.23744C9.56563 8.90925 9.75 8.46413 9.75 8C9.75 7.53587 9.56563 7.09075 9.23744 6.76256C8.90925 6.43437 8.46413 6.25 8 6.25C7.53587 6.25 7.09075 6.43437 6.76256 6.76256C6.43437 7.09075 6.25 7.53587 6.25 8C6.25 8.46413 6.43437 8.90925 6.76256 9.23744C7.09075 9.56563 7.53587 9.75 8 9.75Z", fill: "black", stroke: "black", strokeWidth: "2", strokeLinejoin: "round" })] }), jsx("g", { mask: "url(#mask0_309_646)", children: jsx("path", { d: "M-0.399994 -0.399902H16.4V16.4001H-0.399994V-0.399902Z", fill: "currentColor" }) })] }));
const Logout = () => (jsx("svg", { width: "16", height: "14", viewBox: "0 0 16 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M4.30777 7C4.30777 6.83123 4.37261 6.66936 4.48801 6.55002C4.60342 6.43068 4.75995 6.36364 4.92316 6.36364H10.4617V2.22727C10.4617 0.954545 9.16209 0 8.00014 0H2.15388C1.58283 0.000631681 1.03533 0.235493 0.631533 0.653051C0.227734 1.07061 0.000610867 1.63676 0 2.22727V11.7727C0.000610867 12.3632 0.227734 12.9294 0.631533 13.3469C1.03533 13.7645 1.58283 13.9994 2.15388 14H8.30784C8.8789 13.9994 9.42639 13.7645 9.83019 13.3469C10.234 12.9294 10.4611 12.3632 10.4617 11.7727V7.63636H4.92316C4.75995 7.63636 4.60342 7.56932 4.48801 7.44998C4.37261 7.33064 4.30777 7.16877 4.30777 7ZM15.8199 6.55017L12.7429 3.36835C12.6266 3.25405 12.4716 3.19127 12.3112 3.19339C12.1507 3.19552 11.9974 3.26238 11.8839 3.37973C11.7704 3.49707 11.7058 3.65562 11.7037 3.82156C11.7017 3.98749 11.7624 4.1477 11.8729 4.26801L13.8991 6.36364H10.4617V7.63636H13.8991L11.8729 9.73199C11.8134 9.79049 11.7657 9.86073 11.7328 9.93857C11.7 10.0164 11.6825 10.1003 11.6814 10.1852C11.6804 10.2701 11.6958 10.3544 11.7267 10.4331C11.7577 10.5118 11.8035 10.5833 11.8616 10.6433C11.9197 10.7034 11.9888 10.7508 12.0649 10.7828C12.141 10.8148 12.2225 10.8307 12.3047 10.8296C12.3868 10.8286 12.4679 10.8105 12.5431 10.7765C12.6184 10.7425 12.6863 10.6932 12.7429 10.6316L15.8199 7.44983C15.9352 7.3305 16 7.1687 16 7C16 6.8313 15.9352 6.6695 15.8199 6.55017Z", fill: "currentColor" }) }));
const MdClear = () => (jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M15.0799 13.1521C15.1556 13.2272 15.1982 13.3294 15.1982 13.4361C15.1982 13.5427 15.1556 13.645 15.0799 13.7201L14.5199 14.2801C14.4448 14.3558 14.3425 14.3984 14.2359 14.3984C14.1292 14.3984 14.027 14.3558 13.9519 14.2801L10.3999 10.7281L6.84788 14.2801C6.77278 14.3558 6.67054 14.3984 6.56388 14.3984C6.45723 14.3984 6.35499 14.3558 6.27988 14.2801L5.71988 13.7201C5.64416 13.645 5.60156 13.5427 5.60156 13.4361C5.60156 13.3294 5.64416 13.2272 5.71988 13.1521L9.27188 9.60008L5.71988 6.04808C5.64416 5.97297 5.60156 5.87073 5.60156 5.76408C5.60156 5.65742 5.64416 5.55518 5.71988 5.48008L6.27988 4.92008C6.35499 4.84435 6.45723 4.80176 6.56388 4.80176C6.67054 4.80176 6.77278 4.84435 6.84788 4.92008L10.3999 8.47208L13.9519 4.92008C14.027 4.84435 14.1292 4.80176 14.2359 4.80176C14.3425 4.80176 14.4448 4.84435 14.5199 4.92008L15.0799 5.48008C15.1556 5.55518 15.1982 5.65742 15.1982 5.76408C15.1982 5.87073 15.1556 5.97297 15.0799 6.04808L11.5279 9.60008L15.0799 13.1521Z", fill: "currentColor" }) }));
const Jobs = () => (jsxs("svg", { width: "18", height: "15", viewBox: "0 0 18 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M17.4143 7.43701V13.0556C17.4143 13.9392 16.6414 14.6951 15.7838 14.6951L2.31002 14.7C1.19691 14.7 0.585693 13.7861 0.585693 13.0394V7.43734L8.99984 10.1597C9.26395 10.1877 17.414 7.43734 17.414 7.43734L17.4143 7.43701Z", fill: "currentColor" }), jsx("path", { d: "M17.4144 6.32009C14.6343 7.27584 9.00031 9.14024 9.00031 9.14024L0.601318 6.32173V4.25149C0.601318 2.87682 1.37259 2.80436 2.18041 2.80436H6.20668V1.80217C6.20668 1.39741 6.2439 0.709417 7.31551 0.709417C8.38711 0.709417 9.54665 0.700195 10.5629 0.700195C11.7979 0.700195 11.7939 1.55253 11.7939 1.80217V2.80436H15.8202C16.9274 2.80436 17.4102 2.99637 17.4102 4.25116L17.4144 6.31976V6.32009ZM7.58687 2.08146V2.80469H10.4134V2.08146H7.58687Z", fill: "currentColor" })] }));
const Translate = () => (jsxs("svg", { width: "14", height: "15", viewBox: "0 0 14 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M13.9994 3.78134V13.1318C13.8975 13.6906 13.4918 14.0963 12.9333 14.1979H6.64496C7.26653 13.4331 7.96069 12.7266 8.56966 11.953C8.72636 11.6706 8.73841 11.3854 8.7228 11.0676L7.68401 2.6875H12.9198C13.2697 2.6875 13.7554 3.09595 13.8871 3.41536L14 3.78107L13.9994 3.78134ZM10.6911 5.92767V6.40624C10.2917 6.40624 9.79527 6.41282 9.39888 6.41282C8.89976 6.41282 8.94085 7.20807 9.35615 7.20807C9.42682 7.20807 9.55064 7.21354 9.58434 7.25327C9.61803 7.29299 9.7098 7.63103 9.74816 7.71814C9.95224 8.18165 10.2171 8.61393 10.5204 9.01772C10.4549 9.08319 9.78815 9.62586 9.67885 9.72777C9.50435 9.89076 9.37751 10.0557 9.51914 10.2981C9.67419 10.5636 9.92375 10.5386 10.1525 10.3929C10.3078 10.2937 11.0743 9.62066 11.1091 9.61052C11.1253 9.63627 11.4334 9.89843 11.5805 10.014C11.7276 10.1296 12.0764 10.3891 12.2139 10.474C12.5629 10.6901 12.9746 10.1524 12.6867 9.86447C12.5391 9.71681 11.7613 9.09743 11.6814 9.01744C11.9706 8.63064 12.2457 8.23425 12.4451 7.79156C12.4876 7.69732 12.6163 7.28696 12.6448 7.25327C12.6785 7.21354 12.8023 7.20807 12.873 7.20807C13.3201 7.20807 13.325 6.41282 12.8303 6.41282C12.435 6.41282 11.8928 6.40624 11.5107 6.40624V5.92767C11.5107 5.48553 10.6905 5.52771 10.6905 5.92767H10.6911Z", fill: "#DD3F24" }), jsx("path", { d: "M1.08837 0.207318L5.56428 0.200195C6.06504 0.256353 6.45924 0.579603 6.63073 1.04749L7.93058 11.3151C7.97632 11.5523 7.86894 11.7235 7.7106 11.7235L1.13603 11.7372C0.513638 11.6747 0.0490353 11.2036 0 10.5765L0.0013697 1.33486C0.0536923 0.74698 0.503229 0.278542 1.08837 0.207318ZM5.35773 7.5996L4.49892 3.37078C4.4214 3.22395 4.30333 3.14752 4.14006 3.12807C3.95296 3.10588 3.24592 3.10205 3.09827 3.17382C2.99472 3.22422 2.89692 3.36092 2.87966 3.47488L2.05346 7.5996C1.98251 8.01928 2.72626 8.23158 2.85829 7.71904C2.96349 7.31005 3.0517 6.86297 3.12018 6.40906L4.27648 6.40467C4.30032 6.49863 4.58138 7.69 4.63946 7.90285C4.74547 8.29075 5.50127 8.13954 5.35745 7.59987L5.35773 7.5996Z", fill: "#DD3F24" }), jsx("path", { d: "M6.94548 12.5576L5.56564 14.0607C4.93914 13.8079 4.83367 13.1586 4.78546 12.5576H6.94548Z", fill: "#DD3F24" }), jsx("path", { d: "M11.812 7.22607C11.6315 7.64739 11.4052 8.04653 11.1146 8.40155C11.0748 8.41169 10.996 8.28129 10.9697 8.24623C10.7371 7.93585 10.5782 7.57672 10.4177 7.22607H11.812Z", fill: "#DD3F24" }), jsx("path", { d: "M3.2818 5.58585L3.62669 3.94385L3.79872 3.94823L4.12937 5.58585H3.2818Z", fill: "#DD3F24" })] }));
const NotificationTop = () => (jsx("svg", { width: "10", height: "12", viewBox: "0 0 10 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M10 9.71429V10.2857H0V9.71429L1.11111 8.57143V5.14286C1.11111 3.37143 2.23889 1.81143 3.88889 1.30857V1.14286C3.88889 0.839753 4.00595 0.549062 4.21433 0.334735C4.4227 0.120408 4.70532 0 5 0C5.29469 0 5.5773 0.120408 5.78567 0.334735C5.99405 0.549062 6.11111 0.839753 6.11111 1.14286V1.30857C7.76111 1.81143 8.88889 3.37143 8.88889 5.14286V8.57143L10 9.71429ZM6.11111 10.8571C6.11111 11.1602 5.99405 11.4509 5.78567 11.6653C5.5773 11.8796 5.29469 12 5 12C4.70532 12 4.4227 11.8796 4.21433 11.6653C4.00595 11.4509 3.88889 11.1602 3.88889 10.8571", fill: "#FEF4F2" }) }));
const ArrowDown = () => (jsx("svg", { stroke: "currentColor", fill: "currentColor", "stroke-width": "0", viewBox: "0 0 512 512", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z" }) }));
const MdAccountCircle = () => (jsxs("svg", { stroke: "currentColor", fill: "currentColor", "stroke-width": "0", viewBox: "0 0 24 24", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { fill: "none", d: "M0 0h24v24H0z" }), jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z" })] }));
const DashboardUs = () => (jsxs("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxs("g", { "clip-path": "url(#clip0_553_16673)", children: [jsx("path", { d: "M13.0903 0.5H0.909733C0.407301 0.5 0 0.89973 0 1.39282V5.80339C0 6.29648 0.407301 6.69621 0.909733 6.69621H13.0903C13.5927 6.69621 14 6.29648 14 5.80339V1.39282C14 0.89973 13.5927 0.5 13.0903 0.5Z", fill: "currentColor" }), jsx("path", { d: "M5.76325 7.30383H0.909733C0.407301 7.30383 0 7.70356 0 8.19665V12.6072C0 13.1003 0.407301 13.5 0.909733 13.5H5.76325C6.26568 13.5 6.67298 13.1003 6.67298 12.6072V8.19665C6.67298 7.70356 6.26568 7.30383 5.76325 7.30383Z", fill: "currentColor" }), jsx("path", { d: "M13.0903 7.30383H8.23676C7.73433 7.30383 7.32703 7.70356 7.32703 8.19665V12.6072C7.32703 13.1003 7.73433 13.5 8.23676 13.5H13.0903C13.5927 13.5 14 13.1003 14 12.6072V8.19665C14 7.70356 13.5927 7.30383 13.0903 7.30383Z", fill: "currentColor" })] }), jsx("defs", { children: jsx("clipPath", { id: "clip0_553_16673", children: jsx("rect", { width: "14", height: "13", fill: "white", transform: "translate(0 0.5)" }) }) })] }));
const CvManagementUs = () => (jsxs("svg", { width: "14", height: "16", viewBox: "0 0 14 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M12.2146 0.222168C12.9113 0.337627 13.5271 0.713433 13.8163 1.30787C13.9055 1.49092 13.9395 1.6785 14 1.86802V14.1322C13.8503 15.0116 13.1164 15.6907 12.1247 15.7777H1.87674C0.840988 15.6801 0.0766162 14.9601 0 14.0206L0.0017901 1.9492C0.0637275 1.10476 0.844926 0.313694 1.78688 0.222168H12.2146ZM8.57206 5.9343C8.54199 5.89711 8.82304 5.54847 8.86385 5.47247C9.68192 3.9521 8.17645 2.29687 6.36559 2.73057C5.27721 2.99124 4.63134 4.01678 4.83828 5.00061C4.90344 5.31108 5.09068 5.65099 5.3216 5.88708V5.9343C4.44517 6.23993 3.73128 6.93785 3.39295 7.72537C3.22218 8.12252 2.91858 8.9469 3.54296 8.9469L10.0911 8.96986C10.9228 8.96986 10.6536 8.29393 10.4653 7.82207C10.1427 7.01386 9.43525 6.29717 8.57206 5.93398V5.9343ZM2.54445 10.4304C1.8907 10.4304 1.94082 11.3896 2.54445 11.3896H11.4244C12.1014 11.3896 12.1064 10.421 11.4244 10.421L2.54445 10.4301V10.4304ZM2.54445 12.3971C1.86564 12.3971 1.90252 13.3573 2.54445 13.3573L11.4244 13.3589C12.1265 13.3589 12.1365 12.3887 11.4119 12.3887L2.54445 12.3968V12.3971Z", fill: "currentColor" }), jsx("path", { d: "M9.35746 8.00056H4.42932C5.32043 6.07658 8.47745 6.05232 9.35746 8.00056Z", fill: "currentColor" }), jsx("path", { d: "M6.81509 3.61886C8.2622 3.51602 8.36997 5.56322 6.91104 5.58198C5.53696 5.59977 5.4317 3.71718 6.81509 3.61886Z", fill: "currentColor" })] }));
const AppliedJobsUs = () => (jsxs("svg", { width: "100%", height: "18", viewBox: "0 0 15 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M1 1.48077C1 0.939105 1.43652 0.5 1.975 0.5H5.875H6.2C10.5078 0.5 14 4.01284 14 8.34615V8.67308V16.5192C14 17.0609 13.5635 17.5 13.025 17.5H1.975C1.43652 17.5 1 17.0609 1 16.5192V1.48077Z", fill: "currentColor" }), jsx("path", { d: "M5.875 0.5H1.975C1.43652 0.5 1 0.939105 1 1.48077V16.5192C1 17.0609 1.43652 17.5 1.975 17.5H13.025C13.5635 17.5 14 17.0609 14 16.5192V8.67308M5.875 0.5H6.2C10.5078 0.5 14 4.01284 14 8.34615V8.67308M5.875 0.5C7.49043 0.5 8.8 1.81732 8.8 3.44231V4.75C8.8 5.29166 9.23652 5.73077 9.775 5.73077H11.075C12.6904 5.73077 14 7.04809 14 8.67308M4.9 11.6154L6.85 13.5769L10.1 9", stroke: "#FEF4F2", "stroke-linecap": "round", "stroke-linejoin": "round" })] }));
const FollowingJobsUs = () => (jsxs("svg", { width: "16", height: "18", viewBox: "0 0 16 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M1 3.18182C1 1.97683 1.85473 1 2.90909 1H4.18182H11.8182H13.0909C14.1453 1 15 1.97683 15 3.18182V14.8182C15 16.0232 14.1453 17 13.0909 17H2.90909C1.85473 17 1 16.0232 1 14.8182V3.18182Z", fill: "currentColor" }), jsx("path", { d: "M11.8182 1V13.3636L8 11.1818L4.18182 13.3636V1M11.8182 1H13.0909C14.1453 1 15 1.97683 15 3.18182V14.8182C15 16.0232 14.1453 17 13.0909 17H2.90909C1.85473 17 1 16.0232 1 14.8182V3.18182C1 1.97683 1.85473 1 2.90909 1H4.18182M11.8182 1H4.18182", stroke: "#FEF4F2", "stroke-linecap": "round", "stroke-linejoin": "round" })] }));
const LogoutUs = () => (jsx("svg", { width: "16", height: "14", viewBox: "0 0 16 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M4.30777 7C4.30777 6.83123 4.37261 6.66936 4.48801 6.55002C4.60342 6.43068 4.75995 6.36364 4.92316 6.36364H10.4617V2.22727C10.4617 0.954545 9.16209 0 8.00014 0H2.15388C1.58283 0.000631681 1.03533 0.235493 0.631533 0.653051C0.227734 1.07061 0.000610867 1.63676 0 2.22727V11.7727C0.000610867 12.3632 0.227734 12.9294 0.631533 13.3469C1.03533 13.7645 1.58283 13.9994 2.15388 14H8.30784C8.8789 13.9994 9.42639 13.7645 9.83019 13.3469C10.234 12.9294 10.4611 12.3632 10.4617 11.7727V7.63636H4.92316C4.75995 7.63636 4.60342 7.56932 4.48801 7.44998C4.37261 7.33064 4.30777 7.16877 4.30777 7ZM15.8199 6.55017L12.7429 3.36835C12.6266 3.25405 12.4716 3.19127 12.3112 3.19339C12.1507 3.19552 11.9974 3.26238 11.8839 3.37973C11.7704 3.49707 11.7058 3.65562 11.7037 3.82156C11.7017 3.98749 11.7624 4.1477 11.8729 4.26801L13.8991 6.36364H10.4617V7.63636H13.8991L11.8729 9.73199C11.8134 9.79049 11.7657 9.86073 11.7328 9.93857C11.7 10.0164 11.6825 10.1003 11.6814 10.1852C11.6804 10.2701 11.6958 10.3544 11.7267 10.4331C11.7577 10.5118 11.8035 10.5833 11.8616 10.6433C11.9197 10.7034 11.9888 10.7508 12.0649 10.7828C12.141 10.8148 12.2225 10.8307 12.3047 10.8296C12.3868 10.8286 12.4679 10.8105 12.5431 10.7765C12.6184 10.7425 12.6863 10.6932 12.7429 10.6316L15.8199 7.44983C15.9352 7.3305 16 7.1687 16 7C16 6.8313 15.9352 6.6695 15.8199 6.55017Z", fill: "currentColor" }) }));
const JobManagement = () => (jsx("svg", { stroke: "currentColor", fill: "currentColor", "stroke-width": "0", viewBox: "0 0 256 256", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM135.5,131.56a8,8,0,0,1-7.87,6.61,8.27,8.27,0,0,1-1.4-.12l-41.5-7.33A8,8,0,0,1,87.52,115L129,122.29A8,8,0,0,1,135.5,131.56Zm47-24.18a8,8,0,0,1-7.86,6.61,7.55,7.55,0,0,1-1.41-.13l-83-14.65a8,8,0,0,1,2.79-15.76l83,14.66A8,8,0,0,1,182.53,107.38Zm5.55-31.52a8,8,0,0,1-7.87,6.61,8.36,8.36,0,0,1-1.4-.12l-83-14.66a8,8,0,1,1,2.78-15.75l83,14.65A8,8,0,0,1,188.08,75.86Z" }) }));
const Topdev = () => (jsxs("svg", { width: "14", height: "15", viewBox: "0 0 14 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M7.7987 10.2646C7.7987 10.3845 7.77517 10.5031 7.72945 10.6138C7.68373 10.7245 7.61673 10.825 7.5323 10.9096C7.44786 10.9941 7.34765 11.061 7.23743 11.1065C7.12722 11.1519 7.00917 11.175 6.89007 11.1743C6.77119 11.175 6.65336 11.1519 6.54341 11.1064C6.43345 11.0609 6.33355 10.9939 6.24949 10.9093C6.16542 10.8247 6.09886 10.7241 6.05365 10.6135C6.00844 10.5028 5.98548 10.3842 5.9861 10.2646C5.98548 10.1447 6.00841 10.0259 6.05356 9.91498C6.09871 9.80406 6.1652 9.70321 6.2492 9.61823C6.3332 9.53325 6.43307 9.46582 6.54305 9.4198C6.65303 9.37379 6.77096 9.3501 6.89007 9.3501C7.13106 9.3501 7.36216 9.44645 7.53257 9.61795C7.70297 9.78945 7.7987 10.022 7.7987 10.2646Z", fill: "#DD3F24" }), jsx("path", { d: "M10.9413 10.3207C10.9413 10.4983 10.8712 10.6685 10.7465 10.794C10.6217 10.9196 10.4526 10.9901 10.2762 10.9901C10.0998 10.9901 9.93061 10.9196 9.80588 10.794C9.68115 10.6685 9.61108 10.4983 9.61108 10.3207C9.61231 10.1436 9.68277 9.97405 9.80724 9.84879C9.9317 9.72352 10.1002 9.6526 10.2762 9.65137C10.4522 9.6526 10.6206 9.72352 10.7451 9.84879C10.8696 9.97405 10.94 10.1436 10.9413 10.3207Z", fill: "#DD3F24" }), jsx("path", { d: "M6.54299 4.05657C6.54299 4.20534 6.48427 4.34802 6.37974 4.45322C6.27522 4.55842 6.13345 4.61752 5.98562 4.61752C5.91204 4.61814 5.83906 4.60409 5.77089 4.57617C5.70273 4.54826 5.64073 4.50705 5.58848 4.4549C5.53622 4.40275 5.49475 4.3407 5.46645 4.27233C5.43815 4.20397 5.42358 4.13063 5.42358 4.05657C5.42358 3.98251 5.43815 3.90918 5.46645 3.84081C5.49475 3.77245 5.53622 3.7104 5.58848 3.65825C5.64073 3.6061 5.70273 3.56487 5.77089 3.53696C5.83906 3.50905 5.91204 3.495 5.98562 3.49563C6.13345 3.49563 6.27522 3.55472 6.37974 3.65992C6.48427 3.76512 6.54299 3.9078 6.54299 4.05657Z", fill: "#DD3F24" }), jsx("path", { d: "M5.95316 1.83151C5.95316 1.96947 5.89902 2.10185 5.80253 2.19984C5.70604 2.29783 5.57502 2.3535 5.43794 2.35475C5.30087 2.3535 5.16983 2.29783 5.07334 2.19984C4.97685 2.10185 4.92272 1.96947 4.92273 1.83151C4.92273 1.69399 4.97701 1.5621 5.07363 1.46486C5.17025 1.36762 5.3013 1.31299 5.43794 1.31299C5.57459 1.31299 5.70563 1.36762 5.80225 1.46486C5.89887 1.5621 5.95316 1.69399 5.95316 1.83151Z", fill: "#DD3F24" }), jsx("path", { d: "M3.94369 6.02216C3.94369 6.09994 3.92839 6.17695 3.89868 6.24875C3.86896 6.32055 3.82541 6.38571 3.77055 6.44048C3.71569 6.49526 3.6506 6.53856 3.57903 6.5679C3.50746 6.59723 3.43081 6.61201 3.35353 6.61139C3.19826 6.61139 3.04934 6.54931 2.93955 6.43881C2.82975 6.32831 2.76807 6.17844 2.76807 6.02216C2.76806 5.86545 2.8296 5.71509 2.93926 5.60384C3.04893 5.49259 3.19783 5.42947 3.35353 5.42822C3.51005 5.42822 3.66016 5.49079 3.77084 5.60218C3.88151 5.71356 3.94369 5.86464 3.94369 6.02216Z", fill: "#DD3F24" }), jsx("path", { d: "M11.7607 4.17911C11.7613 4.25317 11.7473 4.32662 11.7196 4.39522C11.6918 4.46383 11.6509 4.52622 11.5991 4.57881C11.5472 4.6314 11.4856 4.67314 11.4177 4.70163C11.3497 4.73011 11.2769 4.74477 11.2033 4.74477C11.0542 4.74477 10.9113 4.68517 10.8059 4.57909C10.7005 4.47301 10.6412 4.32913 10.6412 4.17911C10.6425 4.02991 10.7022 3.88724 10.8075 3.78217C10.9128 3.67711 11.055 3.61816 11.2033 3.61816C11.3511 3.61816 11.4929 3.67727 11.5974 3.78247C11.7019 3.88767 11.7607 4.03034 11.7607 4.17911Z", fill: "#DD3F24" }), jsx("path", { d: "M2.02365 8.30792C2.02365 8.44294 1.97036 8.57243 1.8755 8.6679C1.78063 8.76338 1.65197 8.81701 1.51781 8.81701C1.38366 8.81701 1.25498 8.76338 1.16012 8.6679C1.06525 8.57243 1.01196 8.44294 1.01196 8.30792C1.01196 8.1729 1.06525 8.04341 1.16012 7.94793C1.25498 7.85246 1.38366 7.79883 1.51781 7.79883C1.65197 7.79883 1.78063 7.85246 1.8755 7.94793C1.97036 8.04341 2.02365 8.1729 2.02365 8.30792Z", fill: "#DD3F24" }), jsx("path", { d: "M13.7419 6.404C13.7419 6.52902 13.6926 6.64892 13.6047 6.73732C13.5169 6.82572 13.3978 6.87538 13.2735 6.87538C13.1493 6.87538 13.0302 6.82572 12.9424 6.73732C12.8545 6.64892 12.8052 6.52902 12.8052 6.404C12.8052 6.27898 12.8545 6.15908 12.9424 6.07068C13.0302 5.98228 13.1493 5.93262 13.2735 5.93262C13.3978 5.93262 13.5169 5.98228 13.6047 6.07068C13.6926 6.15908 13.7419 6.27898 13.7419 6.404Z", fill: "#DD3F24" }), jsx("path", { d: "M1.00725 7.49719C1.00725 7.6047 0.964825 7.70781 0.889285 7.78384C0.813745 7.85986 0.711285 7.90258 0.604455 7.90258C0.498003 7.90135 0.396261 7.85825 0.320984 7.78249C0.245706 7.70672 0.202877 7.60432 0.20166 7.49719C0.202877 7.39005 0.245706 7.28765 0.320984 7.21189C0.396261 7.13613 0.498003 7.09302 0.604455 7.0918C0.711285 7.0918 0.813745 7.1345 0.889285 7.21053C0.964825 7.28655 1.00725 7.38967 1.00725 7.49719Z", fill: "#DD3F24" }), jsx("path", { d: "M8.8103 12.7534C8.8103 12.8872 8.7575 13.0155 8.66352 13.1101C8.56953 13.2046 8.44206 13.2578 8.30915 13.2578C8.17623 13.2578 8.04875 13.2046 7.95476 13.1101C7.86078 13.0155 7.80798 12.8872 7.80798 12.7534C7.80798 12.6196 7.86078 12.4913 7.95476 12.3967C8.04875 12.3022 8.17623 12.249 8.30915 12.249C8.44206 12.249 8.56953 12.3022 8.66352 12.3967C8.7575 12.4913 8.8103 12.6196 8.8103 12.7534Z", fill: "#DD3F24" }), jsx("path", { d: "M11.0254 1.90701C11.0254 2.01746 10.9822 2.12346 10.905 2.202C10.8278 2.28055 10.723 2.3253 10.6133 2.32654C10.5027 2.32654 10.3967 2.28233 10.3185 2.20366C10.2403 2.12498 10.1964 2.01827 10.1964 1.90701C10.1976 1.79656 10.2421 1.69105 10.3201 1.61339C10.3982 1.53573 10.5035 1.49218 10.6133 1.49219C10.7222 1.49341 10.8263 1.53751 10.9034 1.61504C10.9804 1.69257 11.0242 1.79737 11.0254 1.90701Z", fill: "#DD3F24" }), jsx("path", { d: "M8.51945 1.11973C8.52007 1.17438 8.50985 1.2286 8.48936 1.27921C8.46887 1.32982 8.43852 1.3758 8.40012 1.41445C8.36172 1.45309 8.31604 1.48363 8.26575 1.50425C8.21546 1.52487 8.16158 1.53517 8.10728 1.53454C8.05276 1.53516 7.99866 1.5249 7.94812 1.50433C7.89757 1.48376 7.85157 1.4533 7.8128 1.41472C7.77403 1.37614 7.74325 1.3302 7.72225 1.27956C7.70124 1.22892 7.69043 1.1746 7.69043 1.11973C7.69043 1.00846 7.73435 0.901746 7.81253 0.823069C7.8907 0.744391 7.99672 0.700195 8.10728 0.700195C8.1618 0.700192 8.21579 0.71107 8.26611 0.73221C8.31642 0.753351 8.36206 0.784329 8.4004 0.823349C8.43873 0.862369 8.46899 0.908656 8.48943 0.959529C8.50987 1.0104 8.52007 1.06486 8.51945 1.11973Z", fill: "#DD3F24" }), jsx("path", { d: "M3.18502 2.64219C3.18502 2.69706 3.1742 2.75139 3.1532 2.80202C3.13219 2.85266 3.1014 2.8986 3.06263 2.93718C3.02386 2.97576 2.97788 3.00622 2.92733 3.02679C2.87678 3.04736 2.82268 3.05763 2.76816 3.05701C2.71385 3.05764 2.65997 3.04734 2.60968 3.02672C2.55939 3.00609 2.51371 2.97556 2.47531 2.93692C2.43691 2.89827 2.40658 2.85228 2.38609 2.80167C2.3656 2.75106 2.35536 2.69684 2.35598 2.64219C2.35536 2.58732 2.36558 2.53287 2.38602 2.482C2.40645 2.43112 2.4367 2.38484 2.47504 2.34582C2.51337 2.3068 2.55902 2.27582 2.60934 2.25468C2.65965 2.23354 2.71363 2.22265 2.76816 2.22266C2.87871 2.22266 2.98474 2.26685 3.06292 2.34553C3.14109 2.42421 3.18502 2.53092 3.18502 2.64219Z", fill: "#DD3F24" }), jsx("path", { d: "M1.53155 10.3116C1.53217 10.3663 1.52193 10.4205 1.50144 10.4711C1.48095 10.5217 1.45062 10.5677 1.41222 10.6063C1.37382 10.645 1.32814 10.6755 1.27785 10.6961C1.22756 10.7168 1.17368 10.7271 1.11937 10.7264C1.06485 10.7271 1.01075 10.7168 0.960201 10.6962C0.909652 10.6757 0.863668 10.6452 0.824897 10.6066C0.786126 10.568 0.755338 10.5221 0.734332 10.4715C0.713327 10.4208 0.702511 10.3665 0.702515 10.3116C0.702515 10.2004 0.746436 10.0936 0.824611 10.015C0.902786 9.93629 1.00882 9.89209 1.11937 9.89209C1.1739 9.89209 1.22788 9.90296 1.27819 9.9241C1.32851 9.94525 1.37416 9.97622 1.41249 10.0152C1.45083 10.0543 1.48108 10.1006 1.50152 10.1514C1.52195 10.2023 1.53217 10.2568 1.53155 10.3116Z", fill: "#DD3F24" }), jsx("path", { d: "M11.4938 12.2488C11.4938 12.3593 11.4505 12.4653 11.3734 12.5438C11.2962 12.6224 11.1914 12.6671 11.0816 12.6684C10.9711 12.6684 10.8651 12.6242 10.7869 12.5455C10.7087 12.4668 10.6648 12.3601 10.6648 12.2488C10.6648 12.194 10.6756 12.1396 10.6966 12.089C10.7176 12.0383 10.7484 11.9924 10.7872 11.9538C10.8259 11.9152 10.8719 11.8848 10.9225 11.8642C10.973 11.8437 11.0271 11.8334 11.0816 11.834C11.191 11.834 11.2958 11.8777 11.3731 11.9555C11.4504 12.0333 11.4938 12.1388 11.4938 12.2488Z", fill: "#DD3F24" }), jsx("path", { d: "M8.33246 14.2853C8.33123 14.3957 8.28676 14.5012 8.20872 14.5789C8.13068 14.6565 8.02535 14.7001 7.9156 14.7001C7.80629 14.7001 7.70145 14.6564 7.62415 14.5786C7.54686 14.5008 7.50344 14.3953 7.50344 14.2853C7.50283 14.2304 7.51303 14.1759 7.53346 14.1251C7.5539 14.0742 7.58416 14.0279 7.6225 13.9889C7.66083 13.9499 7.70647 13.9189 7.75679 13.8977C7.8071 13.8766 7.86108 13.8657 7.9156 13.8657C8.02616 13.8657 8.13219 13.9099 8.21037 13.9886C8.28854 14.0673 8.33246 14.174 8.33246 14.2853Z", fill: "#DD3F24" }), jsx("path", { d: "M13.3673 10.8776C13.3613 10.9985 13.3093 11.1125 13.2221 11.1958C13.1349 11.2792 13.0192 11.3256 12.8989 11.3254C12.7786 11.3256 12.6629 11.2792 12.5757 11.1958C12.4885 11.1125 12.4366 10.9985 12.4305 10.8776C12.4305 10.7526 12.4799 10.6327 12.5677 10.5443C12.6556 10.4559 12.7747 10.4062 12.8989 10.4062C13.0231 10.4062 13.1423 10.4559 13.2301 10.5443C13.3179 10.6327 13.3673 10.7526 13.3673 10.8776Z", fill: "#DD3F24" }), jsx("path", { d: "M2.51035 12.1504C2.51035 12.2454 2.47285 12.3365 2.40609 12.4037C2.33934 12.4709 2.24879 12.5087 2.15438 12.5087C2.06079 12.5074 1.97145 12.4691 1.9057 12.4021C1.83995 12.335 1.80309 12.2446 1.8031 12.1504C1.80431 12.057 1.84171 11.9678 1.90733 11.9018C1.97295 11.8357 2.06159 11.7981 2.15438 11.7969C2.24798 11.7969 2.33783 11.834 2.40445 11.9001C2.47107 11.9663 2.50912 12.0562 2.51035 12.1504Z", fill: "#DD3F24" }), jsx("path", { d: "M6.63223 13.9697C6.63223 14.0747 6.59078 14.1754 6.517 14.2497C6.44321 14.3239 6.34314 14.3656 6.2388 14.3656C6.18696 14.3663 6.13552 14.3565 6.0875 14.3368C6.03948 14.3171 5.99586 14.288 5.9592 14.2511C5.92254 14.2142 5.89359 14.1703 5.87404 14.122C5.85449 14.0736 5.84474 14.0219 5.84537 13.9697C5.84537 13.8647 5.88682 13.764 5.9606 13.6897C6.03438 13.6154 6.13445 13.5737 6.2388 13.5737C6.34277 13.575 6.44213 13.6171 6.51565 13.6911C6.58917 13.7651 6.63101 13.8651 6.63223 13.9697Z", fill: "#DD3F24" }), jsx("path", { d: "M5.54988 1.07229C5.54989 1.16649 5.51303 1.2569 5.44728 1.32395C5.38154 1.391 5.2922 1.4293 5.1986 1.43054C5.15207 1.43054 5.10601 1.42124 5.06308 1.40318C5.02016 1.38512 4.98122 1.35866 4.94853 1.32533C4.91585 1.292 4.89008 1.25247 4.87271 1.20903C4.85533 1.16559 4.8467 1.11911 4.84732 1.07229C4.84732 0.978523 4.88433 0.888598 4.95021 0.822297C5.01608 0.755995 5.10544 0.71875 5.1986 0.71875C5.29139 0.719971 5.38004 0.757611 5.44565 0.823649C5.51127 0.889687 5.54867 0.978903 5.54988 1.07229Z", fill: "#DD3F24" }), jsx("path", { d: "M6.10207 7.19253L3.64111 9.24951L3.78774 9.4272L6.2487 7.37022L6.10207 7.19253Z", fill: "#DD3F24" }), jsx("path", { d: "M5.89606 3.83402L3.45557 5.91553L3.60395 6.09174L6.04444 4.01023L5.89606 3.83402Z", fill: "#DD3F24" }), jsx("path", { d: "M9.09589 4.98528L6.65098 7.05936L6.5011 6.88495L8.94601 4.80615L9.09589 4.98528Z", fill: "#DD3F24" }), jsx("path", { d: "M8.46677 2.36021L5.71753 4.00635L5.83487 4.20485L8.58412 2.55871L8.46677 2.36021Z", fill: "#DD3F24" }), jsx("path", { d: "M6.29484 7.12549L7.03487 10.2602L6.81005 10.312L6.07471 7.17734L6.29484 7.12549Z", fill: "#DD3F24" }), jsx("path", { d: "M10.1778 10.4906L6.97876 10.3822L6.98813 10.1465L10.1871 10.2596L10.1778 10.4906Z", fill: "#DD3F24" }), jsx("path", { d: "M11.1877 7.43962L10.1494 10.4849L10.3665 10.5598L11.4048 7.51459L11.1877 7.43962Z", fill: "#DD3F24" }), jsx("path", { d: "M3.49917 6.0885L3.27246 6.12451L3.77124 9.30468L3.99795 9.26867L3.49917 6.0885Z", fill: "#DD3F24" }), jsx("path", { d: "M8.94138 4.96888L8.80005 5.15088L11.3205 7.13347L11.4619 6.95148L8.94138 4.96888Z", fill: "#DD3F24" }), jsx("path", { d: "M3.7729 9.13711L3.70239 9.35693L6.74671 10.3459L6.81722 10.1261L3.7729 9.13711Z", fill: "#DD3F24" }), jsx("path", { d: "M1.29119 8.19332L1.21765 8.41211L4.24795 9.4438L4.3215 9.22501L1.29119 8.19332Z", fill: "#DD3F24" }), jsx("path", { d: "M3.38531 5.71246L1.44409 8.27148L1.62651 8.41164L3.56773 5.85262L3.38531 5.71246Z", fill: "#DD3F24" }), jsx("path", { d: "M5.78825 3.90373L5.71924 4.12402L8.77017 5.09216L8.83918 4.87186L5.78825 3.90373Z", fill: "#DD3F24" }), jsx("path", { d: "M8.37589 2.18107L8.25049 2.37451L10.9297 4.13365L11.0551 3.94021L8.37589 2.18107Z", fill: "#DD3F24" }), jsx("path", { d: "M4.06535 9.1709L5.0302 12.2443L4.81006 12.3103L3.84521 9.24161L4.06535 9.1709Z", fill: "#DD3F24" }), jsx("path", { d: "M7.13509 10.2332L4.6427 12.2515L4.78657 12.4314L7.27897 10.4132L7.13509 10.2332Z", fill: "#DD3F24" }), jsx("path", { d: "M10.0383 10.4978L7.9812 12.9634L8.15696 13.1119L10.2141 10.6463L10.0383 10.4978Z", fill: "#DD3F24" }), jsx("path", { d: "M1.54676 5.12002L1.31726 5.12256L1.35243 8.3419L1.58193 8.33936L1.54676 5.12002Z", fill: "#DD3F24" }), jsx("path", { d: "M8.94153 5.00861L10.9415 4.25439L11.0211 4.47594L9.02115 5.22544L8.94153 5.00861Z", fill: "#DD3F24" }), jsx("path", { d: "M6.0329 4.3428L5.80469 4.36719L6.03016 6.50468L6.25838 6.4803L6.0329 4.3428Z", fill: "#DD3F24" }), jsx("path", { d: "M8.78096 2.75363L8.55432 2.79004L8.89101 4.91267L9.11765 4.87625L8.78096 2.75363Z", fill: "#DD3F24" }), jsx("path", { d: "M12.4872 9.49844L10.4539 10.1562L10.5241 10.3761L12.5574 9.71833L12.4872 9.49844Z", fill: "#DD3F24" }), jsx("path", { d: "M4.99751 12.1548L7.99979 12.5979L7.967 12.8289L4.96472 12.381L4.99751 12.1548Z", fill: "#DD3F24" }), jsx("path", { d: "M1.41214 8.3183L0.987061 10.4248L1.21197 10.4708L1.63704 8.36427L1.41214 8.3183Z", fill: "#DD3F24" }), jsx("path", { d: "M12.4445 9.37849L11.5219 7.44111L11.7326 7.3374L12.6553 9.2795L12.4445 9.37849Z", fill: "#DD3F24" }), jsx("path", { d: "M12.4501 9.83515L11.1226 12.0239L11.3184 12.1443L12.646 9.95548L12.4501 9.83515Z", fill: "#DD3F24" }), jsx("path", { d: "M11.392 4.55007L11.1635 4.57129L11.3596 6.71171L11.5882 6.69049L11.392 4.55007Z", fill: "#DD3F24" }), jsx("path", { d: "M1.59164 5.06536L1.49829 5.27637L3.44943 6.15065L3.54277 5.93965L1.59164 5.06536Z", fill: "#DD3F24" }), jsx("path", { d: "M8.08572 12.768L6.25671 13.8779L6.37523 14.0757L8.20423 12.9658L8.08572 12.768Z", fill: "#DD3F24" }), jsx("path", { d: "M8.57141 12.697L10.8992 12.2397L10.9414 12.4707L8.61357 12.9233L8.57141 12.697Z", fill: "#DD3F24" }), jsx("path", { d: "M5.64391 1.85647L5.41797 1.89697L5.79252 4.01317L6.01846 3.97267L5.64391 1.85647Z", fill: "#DD3F24" }), jsx("path", { d: "M11.4034 4.17809L11.2297 4.3291L12.9722 6.35857L13.1458 6.20756L11.4034 4.17809Z", fill: "#DD3F24" }), jsx("path", { d: "M2.88525 2.43953L5.15687 1.76074L5.22244 1.98229L2.95083 2.6658L2.88525 2.43953Z", fill: "#DD3F24" }), jsx("path", { d: "M5.78573 1.69534L5.73853 1.92139L8.07616 2.41588L8.12337 2.18983L5.78573 1.69534Z", fill: "#DD3F24" }), jsx("path", { d: "M4.80651 12.188L3.15918 12.7734L3.2356 12.9912L4.88293 12.4058L4.80651 12.188Z", fill: "#DD3F24" }), jsx("path", { d: "M5.19886 12.2951L5.00867 12.4243L6.20391 14.2057L6.39411 14.0764L5.19886 12.2951Z", fill: "#DD3F24" }), jsx("path", { d: "M7.68395 1.10176L5.56604 1.68848L5.62695 1.91117L7.74485 1.32445L7.68395 1.10176Z", fill: "#DD3F24" }), jsx("path", { d: "M12.6367 9.19922L13.0629 6.61133L13.2878 6.64904L12.8662 9.23693L12.6367 9.19922Z", fill: "#DD3F24" }), jsx("path", { d: "M10.5486 13.2609L8.23157 14.1309L8.31179 14.3473L10.6288 13.4773L10.5486 13.2609Z", fill: "#DD3F24" }), jsx("path", { d: "M2.75891 2.43479L5.23661 0.99707L5.34902 1.19976L2.87132 2.63748L2.75891 2.43479Z", fill: "#DD3F24" }), jsx("path", { d: "M5.2644 0.950195L8.12617 0.964337V1.19531L5.2644 1.18117V0.950195Z", fill: "#DD3F24" }), jsx("path", { d: "M8.46246 1.07869L8.39294 1.29883L10.4284 1.94985L10.4979 1.72971L8.46246 1.07869Z", fill: "#DD3F24" }), jsx("path", { d: "M12.9713 6.39106L11.7811 6.94531L11.8775 7.15494L13.0677 6.60069L12.9713 6.39106Z", fill: "#DD3F24" }), jsx("path", { d: "M8.28224 1.25463L8.06482 1.32861L8.48485 2.57896L8.70228 2.50498L8.28224 1.25463Z", fill: "#DD3F24" }), jsx("path", { d: "M12.2712 3.76896L10.5101 1.89757L10.6741 1.7373L12.4398 3.60869L12.2712 3.76896Z", fill: "#DD3F24" }), jsx("path", { d: "M12.5959 3.90989L12.3856 4.00244L13.3746 6.27851L13.5849 6.18596L12.5959 3.90989Z", fill: "#DD3F24" }), jsx("path", { d: "M2.48342 2.90712L0.982422 4.79541L1.16163 4.9397L2.66263 3.05141L2.48342 2.90712Z", fill: "#DD3F24" }), jsx("path", { d: "M0.9602 4.77781L0.425415 7.38135L0.650169 7.42811L1.18495 4.82457L0.9602 4.77781Z", fill: "#DD3F24" }), jsx("path", { d: "M0.582274 7.49432L0.356567 7.53613L0.834793 10.1508L1.0605 10.109L0.582274 7.49432Z", fill: "#DD3F24" }), jsx("path", { d: "M1.13881 10.2797L0.944336 10.4023L2.07088 12.2119L2.26536 12.0892L1.13881 10.2797Z", fill: "#DD3F24" }), jsx("path", { d: "M2.30032 12.0126L2.16577 12.1997L3.10681 12.885L3.24135 12.6979L2.30032 12.0126Z", fill: "#DD3F24" }), jsx("path", { d: "M3.51739 12.8512L3.37793 13.0347L4.77659 14.1117L4.91604 13.9282L3.51739 12.8512Z", fill: "#DD3F24" }), jsx("path", { d: "M6.53278 13.8704L4.77173 13.8818L4.77321 14.1128L6.53427 14.1014L6.53278 13.8704Z", fill: "#DD3F24" }), jsx("path", { d: "M10.8568 13.1683L12.6882 11.0801L12.8568 11.2309L11.0301 13.3239L10.8568 13.1683Z", fill: "#DD3F24" }), jsx("path", { d: "M13.6398 6.45177L13.4108 6.4668L13.5692 8.91279L13.7982 8.89777L13.6398 6.45177Z", fill: "#DD3F24" }), jsx("path", { d: "M3.32318 12.7861L3.25256 13.0059L6.14039 13.9457L6.21101 13.7259L3.32318 12.7861Z", fill: "#DD3F24" }), jsx("path", { d: "M13.4821 8.63947L12.8226 10.6099L13.0407 10.6838L13.7001 8.71339L13.4821 8.63947Z", fill: "#DD3F24" }), jsx("path", { d: "M5.94485 13.8249L5.90125 14.0513L7.5812 14.3791L7.62481 14.1527L5.94485 13.8249Z", fill: "#DD3F24" }), jsx("path", { d: "M10.4853 10.5411L10.2722 10.627L10.9387 12.3031L11.1518 12.2173L10.4853 10.5411Z", fill: "#DD3F24" }), jsx("path", { d: "M12.6561 11.0189L10.9672 12.0703L11.0879 12.2667L12.7768 11.2153L12.6561 11.0189Z", fill: "#DD3F24" }), jsx("path", { d: "M7.0674 7.10149C7.0674 7.22136 7.04387 7.34005 6.99815 7.45074C6.95243 7.56142 6.88542 7.66193 6.80098 7.74647C6.71655 7.83101 6.61635 7.89793 6.50613 7.94337C6.39592 7.98881 6.27786 8.01188 6.15875 8.01126C6.03965 8.01188 5.92161 7.98881 5.81139 7.94337C5.70118 7.89793 5.60096 7.83101 5.51653 7.74647C5.43209 7.66193 5.3651 7.56142 5.31937 7.45074C5.27365 7.34005 5.25012 7.22136 5.25012 7.10149C5.25012 6.85895 5.34585 6.62635 5.51626 6.45485C5.68666 6.28336 5.91777 6.18701 6.15875 6.18701C6.39974 6.18701 6.63086 6.28336 6.80127 6.45485C6.97167 6.62635 7.0674 6.85895 7.0674 7.10149Z", fill: "#A9A5A4" }), jsx("path", { d: "M9.62036 5.11238C9.62036 5.20338 9.60254 5.29348 9.56794 5.37755C9.53334 5.46162 9.48264 5.53801 9.4187 5.60236C9.35477 5.6667 9.27887 5.71774 9.19534 5.75256C9.1118 5.78739 9.02226 5.80531 8.93185 5.80531C8.84104 5.80593 8.751 5.78847 8.66693 5.75392C8.58285 5.71938 8.50639 5.66843 8.44196 5.60403C8.37753 5.53962 8.3264 5.46302 8.29151 5.37864C8.25661 5.29426 8.23865 5.20378 8.23865 5.11238C8.23865 5.02099 8.25661 4.93049 8.29151 4.84612C8.3264 4.76174 8.37753 4.68514 8.44196 4.62073C8.50639 4.55632 8.58285 4.50538 8.66693 4.47083C8.751 4.43629 8.84104 4.41883 8.93185 4.41945C9.02226 4.41945 9.1118 4.43737 9.19534 4.47219C9.27887 4.50702 9.35477 4.55805 9.4187 4.6224C9.48264 4.68674 9.53334 4.76314 9.56794 4.84721C9.60254 4.93128 9.62036 5.02139 9.62036 5.11238Z", fill: "#DD3F24" }), jsx("path", { d: "M9.05844 2.41136C9.05844 2.56013 8.99972 2.70281 8.8952 2.80801C8.79067 2.91321 8.6489 2.97231 8.50108 2.97231C8.35363 2.97108 8.21258 2.91158 8.10832 2.80665C8.00405 2.70172 7.94495 2.55975 7.94373 2.41136C7.94372 2.26215 8.00228 2.11899 8.10667 2.01304C8.21107 1.90709 8.35283 1.84695 8.50108 1.8457C8.57467 1.8457 8.64754 1.86037 8.71547 1.88885C8.7834 1.91734 8.84505 1.95907 8.89687 2.01166C8.94869 2.06425 8.98965 2.12665 9.01738 2.19525C9.04511 2.26385 9.05906 2.3373 9.05844 2.41136Z", fill: "#A9A5A4" }), jsx("path", { d: "M2.68949 2.71781L1.44592 4.97754L1.64669 5.08945L2.89026 2.82972L2.68949 2.71781Z", fill: "#DD3F24" }), jsx("path", { d: "M12.1588 7.21963C12.1577 7.39858 12.0879 7.57016 11.9639 7.69845C11.8399 7.82673 11.6714 7.90177 11.4937 7.90786C11.4029 7.90848 11.3129 7.89101 11.2288 7.85647C11.1447 7.82193 11.0683 7.77098 11.0038 7.70657C10.9394 7.64217 10.8883 7.56557 10.8534 7.48119C10.8185 7.39681 10.8005 7.30632 10.8005 7.21492C10.8005 7.12353 10.8185 7.03303 10.8534 6.94865C10.8883 6.86428 10.9394 6.78768 11.0038 6.72327C11.0683 6.65886 11.1447 6.60792 11.2288 6.57337C11.3129 6.53883 11.4029 6.52137 11.4937 6.52199C11.6731 6.52813 11.8429 6.60448 11.9672 6.73479C12.0914 6.86509 12.1602 7.03905 12.1588 7.21963Z", fill: "#A9A5A4" }), jsx("path", { d: "M4.54818 9.23188C4.54818 9.31956 4.53093 9.40637 4.49745 9.48732C4.46397 9.56827 4.41491 9.64176 4.35309 9.70354C4.29126 9.76532 4.21792 9.81417 4.13725 9.8473C4.05659 9.88042 3.9702 9.89715 3.88308 9.89653C3.79636 9.89653 3.71048 9.87934 3.63036 9.84594C3.55023 9.81254 3.47743 9.76358 3.41611 9.70186C3.35478 9.64014 3.30613 9.56687 3.27294 9.48623C3.23976 9.40559 3.22267 9.31916 3.22267 9.23188C3.22205 9.1442 3.23869 9.05727 3.2716 8.97608C3.30451 8.8949 3.35305 8.82107 3.41444 8.75885C3.47582 8.69663 3.54884 8.64725 3.62927 8.61356C3.7097 8.57986 3.79596 8.56251 3.88308 8.56252C3.9706 8.56189 4.05736 8.57877 4.13834 8.61219C4.21931 8.64561 4.29287 8.69489 4.35476 8.75717C4.41664 8.81946 4.46561 8.89349 4.49881 8.97498C4.53201 9.05648 4.5488 9.1438 4.54818 9.23188Z", fill: "#A9A5A4" }), jsx("path", { d: "M5.43319 12.3053C5.43319 12.4383 5.38104 12.5659 5.28806 12.6603C5.19509 12.7548 5.06881 12.8085 4.93671 12.8097C4.80379 12.8097 4.67633 12.7566 4.58234 12.662C4.48836 12.5674 4.43555 12.4391 4.43555 12.3053C4.43678 12.1724 4.49013 12.0453 4.58399 11.9517C4.67784 11.8581 4.8046 11.8057 4.93671 11.8057C5.06801 11.8069 5.19358 11.8599 5.28642 11.9534C5.37926 12.0468 5.43196 12.1732 5.43319 12.3053Z", fill: "#A9A5A4" }), jsx("path", { d: "M13.1614 9.50535C13.1614 9.63912 13.1086 9.76741 13.0146 9.862C12.9206 9.95659 12.7931 10.0097 12.6602 10.0097C12.5273 10.0097 12.3998 9.95659 12.3058 9.862C12.2119 9.76741 12.1591 9.63912 12.1591 9.50535C12.1591 9.37158 12.2119 9.24329 12.3058 9.1487C12.3998 9.05411 12.5273 9.00098 12.6602 9.00098C12.7931 9.00098 12.9206 9.05411 13.0146 9.1487C13.1086 9.24329 13.1614 9.37158 13.1614 9.50535Z", fill: "#A9A5A4" }), jsx("path", { d: "M11.1286 13.3662C11.1286 13.4712 11.0871 13.5719 11.0133 13.6462C10.9395 13.7204 10.8395 13.7621 10.7351 13.7621C10.6833 13.7628 10.6319 13.753 10.5838 13.7333C10.5358 13.7136 10.4922 13.6845 10.4555 13.6476C10.4189 13.6107 10.3899 13.5668 10.3704 13.5184C10.3508 13.4701 10.3411 13.4183 10.3417 13.3662C10.3417 13.2612 10.3832 13.1604 10.4569 13.0862C10.5307 13.0119 10.6308 12.9702 10.7351 12.9702C10.8391 12.9714 10.9385 13.0135 11.012 13.0875C11.0855 13.1615 11.1274 13.2615 11.1286 13.3662Z", fill: "#A9A5A4" }), jsx("path", { d: "M2.03282 5.15009C2.03282 5.27511 1.98348 5.39501 1.89564 5.48341C1.8078 5.57181 1.68866 5.62148 1.56444 5.62148C1.44022 5.62148 1.3211 5.57181 1.23326 5.48341C1.14542 5.39501 1.09607 5.27511 1.09607 5.15009C1.09607 5.02508 1.14542 4.90518 1.23326 4.81678C1.3211 4.72837 1.44022 4.67871 1.56444 4.67871C1.68866 4.67871 1.8078 4.72837 1.89564 4.81678C1.98348 4.90518 2.03282 5.02508 2.03282 5.15009Z", fill: "#A9A5A4" }), jsx("path", { d: "M3.69074 12.7532C3.69074 12.8645 3.64682 12.9712 3.56864 13.0499C3.49047 13.1286 3.38445 13.1728 3.27389 13.1728C3.21937 13.1728 3.16538 13.1619 3.11506 13.1407C3.06475 13.1196 3.01911 13.0886 2.98077 13.0496C2.94244 13.0106 2.91217 12.9643 2.89174 12.9134C2.8713 12.8625 2.8611 12.8081 2.86172 12.7532C2.86109 12.6986 2.87132 12.6444 2.89181 12.5937C2.9123 12.5431 2.94265 12.4971 2.98104 12.4585C3.01944 12.4199 3.06513 12.3893 3.11542 12.3687C3.16571 12.3481 3.21959 12.3378 3.27389 12.3384C3.32841 12.3378 3.3825 12.3481 3.43305 12.3686C3.4836 12.3892 3.5296 12.4196 3.56837 12.4582C3.60714 12.4968 3.63792 12.5428 3.65892 12.5934C3.67993 12.644 3.69074 12.6984 3.69074 12.7532Z", fill: "#A9A5A4" }), jsx("path", { d: "M12.8991 3.75947C12.8992 3.88051 12.8531 3.99697 12.7703 4.08472C12.6874 4.17248 12.5742 4.2248 12.4541 4.23085C12.334 4.2248 12.2208 4.17248 12.138 4.08472C12.0551 3.99697 12.009 3.88051 12.0092 3.75947C12.009 3.63843 12.0551 3.52197 12.138 3.43421C12.2208 3.34646 12.334 3.29414 12.4541 3.28809C12.5742 3.29414 12.6874 3.34646 12.7703 3.43421C12.8531 3.52197 12.8992 3.63843 12.8991 3.75947Z", fill: "#A9A5A4" })] }));

function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;
const {iterator, toStringTag} = Symbol;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
};

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(toStringTag in val) && !(iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

const [isReadableStream, isRequest, isResponse, isHeaders] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest);

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[iterator];

  const _iterator = generator.call(obj);

  let result;

  while ((result = _iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop = () => {};

const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[toStringTag] === 'FormData' && thing[iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  };

  return visit(obj, 0);
};

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }

  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener("message", ({source, data}) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);

    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    }
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === 'function',
  isFunction(_global.postMessage)
);

const asap = typeof queueMicrotask !== 'undefined' ?
  queueMicrotask.bind(_global) : ( typeof process !== 'undefined' && process.nextTick || _setImmediate);

// *********************


const isIterable = (thing) => thing != null && isFunction(thing[iterator]);


var utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap,
  isIterable
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}

utils$1.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});

const prototype$1 = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);

  utils$1.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

// eslint-disable-next-line strict
var httpAdapter = null;

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils$1.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils$1.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);

  if (!utils$1.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils$1.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils$1.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils$1.isArray(value) && isFlatArray(value)) ||
        ((utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils$1.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils$1.forEach(value, function each(el, key) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils$1.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && toFormData(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?(object|Function)} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  if (utils$1.isFunction(options)) {
    options = {
      serialize: options
    };
  } 

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ?
      params.toString() :
      new AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

var InterceptorManager$1 = InterceptorManager;

var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

var platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};

const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

const _navigator = typeof navigator === 'object' && navigator || undefined;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = hasBrowserEnv &&
  (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();

const origin = hasBrowserEnv && window.location.href || 'http://localhost';

var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  hasBrowserEnv: hasBrowserEnv,
  hasStandardBrowserEnv: hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
  navigator: _navigator,
  origin: origin
});

var platform = {
  ...utils,
  ...platform$1
};

function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};

    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: transitionalDefaults,

  adapter: ['xhr', 'http', 'fetch'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils$1.isObject(data);

    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils$1.isFormData(data);

    if (isFormData) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }

    if (utils$1.isArrayBuffer(data) ||
      utils$1.isBuffer(data) ||
      utils$1.isStream(data) ||
      utils$1.isFile(data) ||
      utils$1.isBlob(data) ||
      utils$1.isReadableStream(data)
    ) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
      return data;
    }

    if (data && utils$1.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

var defaults$1 = defaults;

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils$1.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils$1.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils$1.isString(value)) return;

  if (utils$1.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils$1.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils$1.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if(utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isObject(header) && utils$1.isIterable(header)) {
      let obj = {}, dest, key;
      for (const entry of header) {
        if (!utils$1.isArray(entry)) {
          throw TypeError('Object iterator must return a key-value pair');
        }

        obj[key = entry[0]] = (dest = obj[key]) ?
          (utils$1.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]]) : entry[1];
      }

      setHeaders(obj, valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils$1.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  getSetCookie() {
    return this.get("set-cookie") || [];
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils$1.reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

utils$1.freezeMethods(AxiosHeaders);

var AxiosHeaders$1 = AxiosHeaders;

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults$1;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;

  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils$1.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      'Request failed with status code ' + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1000 / freq;
  let lastArgs;
  let timer;

  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  };

  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if ( passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };

  const flush = () => lastArgs && invoke(lastArgs);

  return [throttled, flush];
}

const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);

  return throttle(e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true
    };

    listener(data);
  }, freq);
};

const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;

  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};

const asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));

var isURLSameOrigin = platform.hasStandardBrowserEnv ? ((origin, isMSIE) => (url) => {
  url = new URL(url, platform.origin);

  return (
    origin.protocol === url.protocol &&
    origin.host === url.host &&
    (isMSIE || origin.port === url.port)
  );
})(
  new URL(platform.origin),
  platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
) : () => true;

var cookies = platform.hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];

      utils$1.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

      utils$1.isString(path) && cookie.push('path=' + path);

      utils$1.isString(domain) && cookie.push('domain=' + domain);

      secure === true && cookie.push('secure');

      document.cookie = cookie.join('; ');
    },

    read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  };

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
  let isRelativeUrl = !isAbsoluteURL(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, prop, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({caseless}, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, prop , caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, prop , caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a, prop , caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b , prop) => mergeDeepProperties(headersToObject(a), headersToObject(b),prop, true)
  };

  utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils$1.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

var resolveConfig = (config) => {
  const newConfig = mergeConfig({}, config);

  let {data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth} = newConfig;

  newConfig.headers = headers = AxiosHeaders$1.from(headers);

  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);

  // HTTP basic authentication
  if (auth) {
    headers.set('Authorization', 'Basic ' +
      btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : ''))
    );
  }

  let contentType;

  if (utils$1.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(undefined); // Let the browser set it
    } else if ((contentType = headers.getContentType()) !== false) {
      // fix semicolon duplication issue for ReactNative FormData implementation
      const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
      headers.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
    }
  }

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (platform.hasStandardBrowserEnv) {
    withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));

    if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(newConfig.url))) {
      // Add xsrf header
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);

      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }

  return newConfig;
};

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

var xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig(config);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
    let {responseType, onUploadProgress, onDownloadProgress} = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;

    function done() {
      flushUpload && flushUpload(); // flush events
      flushDownload && flushDownload(); // flush events

      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);

      _config.signal && _config.signal.removeEventListener('abort', onCanceled);
    }

    let request = new XMLHttpRequest();

    request.open(_config.method.toUpperCase(), _config.url, true);

    // Set the request timeout in MS
    request.timeout = _config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = AxiosHeaders$1.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = _config.transitional || transitionalDefaults;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils$1.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = _config.responseType;
    }

    // Handle progress if needed
    if (onDownloadProgress) {
      ([downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true));
      request.addEventListener('progress', downloadThrottled);
    }

    // Not all browsers support upload events
    if (onUploadProgress && request.upload) {
      ([uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress));

      request.upload.addEventListener('progress', uploadThrottled);

      request.upload.addEventListener('loadend', flushUpload);
    }

    if (_config.cancelToken || _config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(_config.url);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
};

const composeSignals = (signals, timeout) => {
  const {length} = (signals = signals ? signals.filter(Boolean) : []);

  if (timeout || length) {
    let controller = new AbortController();

    let aborted;

    const onabort = function (reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err));
      }
    };

    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError(`timeout ${timeout} of ms exceeded`, AxiosError.ETIMEDOUT));
    }, timeout);

    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach(signal => {
          signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
        });
        signals = null;
      }
    };

    signals.forEach((signal) => signal.addEventListener('abort', onabort));

    const {signal} = controller;

    signal.unsubscribe = () => utils$1.asap(unsubscribe);

    return signal;
  }
};

var composeSignals$1 = composeSignals;

const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;

  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }

  let pos = 0;
  let end;

  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};

const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};

const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }

  const reader = stream.getReader();
  try {
    for (;;) {
      const {done, value} = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};

const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);

  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };

  return new ReadableStream({
    async pull(controller) {
      try {
        const {done, value} = await iterator.next();

        if (done) {
         _onFinish();
          controller.close();
          return;
        }

        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  })
};

const isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function';

// used only inside the fetch adapter
const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ?
    ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) :
    async (str) => new Uint8Array(await new Response(str).arrayBuffer())
);

const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false
  }
};

const supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;

  const hasContentType = new Request(platform.origin, {
    body: new ReadableStream(),
    method: 'POST',
    get duplex() {
      duplexAccessed = true;
      return 'half';
    },
  }).headers.has('Content-Type');

  return duplexAccessed && !hasContentType;
});

const DEFAULT_CHUNK_SIZE = 64 * 1024;

const supportsResponseStream = isReadableStreamSupported &&
  test(() => utils$1.isReadableStream(new Response('').body));


const resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};

isFetchSupported && (((res) => {
  ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
    !resolvers[type] && (resolvers[type] = utils$1.isFunction(res[type]) ? (res) => res[type]() :
      (_, config) => {
        throw new AxiosError(`Response type '${type}' is not supported`, AxiosError.ERR_NOT_SUPPORT, config);
      });
  });
})(new Response));

const getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }

  if(utils$1.isBlob(body)) {
    return body.size;
  }

  if(utils$1.isSpecCompliantForm(body)) {
    const _request = new Request(platform.origin, {
      method: 'POST',
      body,
    });
    return (await _request.arrayBuffer()).byteLength;
  }

  if(utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
    return body.byteLength;
  }

  if(utils$1.isURLSearchParams(body)) {
    body = body + '';
  }

  if(utils$1.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
};

const resolveBodyLength = async (headers, body) => {
  const length = utils$1.toFiniteNumber(headers.getContentLength());

  return length == null ? getBodyLength(body) : length;
};

var fetchAdapter = isFetchSupported && (async (config) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = 'same-origin',
    fetchOptions
  } = resolveConfig(config);

  responseType = responseType ? (responseType + '').toLowerCase() : 'text';

  let composedSignal = composeSignals$1([signal, cancelToken && cancelToken.toAbortSignal()], timeout);

  let request;

  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
  });

  let requestContentLength;

  try {
    if (
      onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' &&
      (requestContentLength = await resolveBodyLength(headers, data)) !== 0
    ) {
      let _request = new Request(url, {
        method: 'POST',
        body: data,
        duplex: "half"
      });

      let contentTypeHeader;

      if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
        headers.setContentType(contentTypeHeader);
      }

      if (_request.body) {
        const [onProgress, flush] = progressEventDecorator(
          requestContentLength,
          progressEventReducer(asyncDecorator(onUploadProgress))
        );

        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }

    if (!utils$1.isString(withCredentials)) {
      withCredentials = withCredentials ? 'include' : 'omit';
    }

    // Cloudflare Workers throws when credentials are defined
    // see https://github.com/cloudflare/workerd/issues/902
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : undefined
    });

    let response = await fetch(request);

    const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');

    if (supportsResponseStream && (onDownloadProgress || (isStreamResponse && unsubscribe))) {
      const options = {};

      ['status', 'statusText', 'headers'].forEach(prop => {
        options[prop] = response[prop];
      });

      const responseContentLength = utils$1.toFiniteNumber(response.headers.get('content-length'));

      const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
        responseContentLength,
        progressEventReducer(asyncDecorator(onDownloadProgress), true)
      ) || [];

      response = new Response(
        trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }),
        options
      );
    }

    responseType = responseType || 'text';

    let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || 'text'](response, config);

    !isStreamResponse && unsubscribe && unsubscribe();

    return await new Promise((resolve, reject) => {
      settle(resolve, reject, {
        data: responseData,
        headers: AxiosHeaders$1.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      });
    })
  } catch (err) {
    unsubscribe && unsubscribe();

    if (err && err.name === 'TypeError' && /Load failed|fetch/i.test(err.message)) {
      throw Object.assign(
        new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request),
        {
          cause: err.cause || err
        }
      )
    }

    throw AxiosError.from(err, err && err.code, config, request);
  }
});

const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: fetchAdapter
};

utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;

var adapters = {
  getAdapter: (adapters) => {
    adapters = utils$1.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new AxiosError(`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new AxiosError(
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
};

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = AxiosHeaders$1.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = AxiosHeaders$1.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

const VERSION = "1.9.0";

const validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

validators$1.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    // eslint-disable-next-line no-console
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  }
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

var validator = {
  assertOptions,
  validators: validators$1
};

const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig || {};
    this.interceptors = {
      request: new InterceptorManager$1(),
      response: new InterceptorManager$1()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};

        Error.captureStackTrace ? Error.captureStackTrace(dummy) : (dummy = new Error());

        // slice off the Error: ... line
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
        try {
          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
            err.stack += '\n' + stack;
          }
        } catch (e) {
          // ignore the case where "stack" is an un-writable property
        }
      }

      throw err;
    }
  }

  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.allowAbsoluteUrls
    if (config.allowAbsoluteUrls !== undefined) ; else if (this.defaults.allowAbsoluteUrls !== undefined) {
      config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
    } else {
      config.allowAbsoluteUrls = true;
    }

    validator.assertOptions(config, {
      baseUrl: validators.spelling('baseURL'),
      withXsrfToken: validators.spelling('withXSRFToken')
    }, true);

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils$1.merge(
      headers.common,
      headers[config.method]
    );

    headers && utils$1.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

var Axios$1 = Axios;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  toAbortSignal() {
    const controller = new AbortController();

    const abort = (err) => {
      controller.abort(err);
    };

    this.subscribe(abort);

    controller.signal.unsubscribe = () => this.unsubscribe(abort);

    return controller.signal;
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

var CancelToken$1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils$1.isObject(payload) && (payload.isAxiosError === true);
}

const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

var HttpStatusCode$1 = HttpStatusCode;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);

  // Copy axios.prototype to instance
  utils$1.extend(instance, Axios$1.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils$1.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults$1);

// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = AxiosHeaders$1;

axios.formToJSON = thing => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = adapters.getAdapter;

axios.HttpStatusCode = HttpStatusCode$1;

axios.default = axios;

// this module should only have a default export
var axios$1 = axios;

const axiosInstance = axios$1.create({
    baseURL: 'https://api.topdev.asia/td/v2',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});
// Add request interceptor
axiosInstance.interceptors.request.use((config) => {
    // You can add auth tokens or other headers here
    return config;
}, (error) => {
    return Promise.reject(error);
});
// Add response interceptor
axiosInstance.interceptors.response.use((response) => response.data, (error) => {
    // Handle errors globally
    return Promise.reject(error);
});

const checkLogin = {
    get: async () => {
        const response = await axiosInstance.get('users/profile');
        return response.data;
    },
};
const getCategories = {
    get: async () => {
        const response = await axiosInstance.get(`job-categories/job-category-with-all-type`);
        return response.data;
    },
};
const getSuggestedKeywords = {
    get: async (keyword) => {
        try {
            const response = await axiosInstance.get(`/suggested-units/?keyword=${encodeURIComponent(keyword)}`);
            const data = response.data;
            return data;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        }
        catch (error) {
            throw new Error('Cannot get suggested keywords!');
        }
    },
};

const LIST_MENU$1 = [
    {
        id: 1,
        name: 'Hot Jobs',
        icon: jsx(BsFire, {}),
        color: '#DD3F24',
        subMenu: [
            {
                id: 'A1',
                name: 'Top 100 Highest Salary',
                link: '/jobs/search?ordering=high_low_salary',
                icon: jsx(Top100Icon, {}),
            },
            {
                id: 'A2',
                name: 'By Location',
                link: '/',
                icon: jsx(IoLocationSharp, {}),
            },
            {
                id: 'A3',
                name: 'Recommend Jobs',
                link: '/',
                icon: jsx(BiSolidLike, {}),
            },
        ],
    },
    {
        id: 2,
        name: 'Jobs',
        subMenu: [
            {
                id: 'IT',
                name: 'IT',
                link: '/',
                icon: jsx(ItGuy, {}),
            },
            {
                id: 'Business & Finance',
                name: 'Business & Finance',
                link: '/',
                icon: jsx(IoBarChart, {}),
            },
            {
                id: 'Management',
                name: 'Management',
                link: '/',
                icon: jsx(HiUsers, {}),
            },
            {
                id: 'Manufacturing & Engineer',
                name: 'Manufacturing & Engineer',
                link: '/',
                icon: jsx(Gear, {}),
            },
            {
                id: 'Service',
                name: 'Service',
                link: '/',
                icon: jsx(Service, {}),
            },
            {
                id: 'Design',
                name: 'Design',
                link: '/',
                icon: jsx(Design, {}),
            },
        ],
    },
    {
        id: 3,
        name: 'Company',
        link: '/',
    },
    {
        id: 4,
        name: 'Tools',
        subMenu: [
            {
                id: 'Create CV',
                name: 'Create CV',
                link: '/tao-cv-online?src=topdev.vn&medium=mainmenu',
                icon: jsx(CreateCv, {}),
            },
            {
                id: 'Convert CV',
                name: 'Convert CV',
                link: '/tao-cv-online?src=topdev.vn&medium=mainmenu',
                icon: jsx(ConvertCv, {}),
            },
            {
                id: 'Personality Test',
                name: 'Personality Test',
                link: '/page/trac-nghiem-tinh-cach?src=topdev.vn&medium=mainmenu',
                icon: jsx(BsFillEmojiSmileFill, {}),
            },
            {
                id: 'Salary',
                name: 'Salary',
                link: '/tool/tinh-luong-gross-net?src=topdev.vn&medium=mainmenu',
                icon: jsx(Salary, {}),
            },
            {
                id: 'Interview',
                name: 'Interview',
                link: '/interview?src=topdev.vn&medium=mainmenu',
                icon: jsx(Interview, {}),
            },
            {
                id: 'Blog',
                name: 'Blog',
                link: `/blog?src=topdev.vn&medium=mainmenu`,
                icon: jsx(Blog, {}),
            },
        ],
    },
    {
        id: 5,
        name: 'Blog',
        link: '/blog?src=topdev.vn&medium=mainmenu',
    },
    {
        id: 6,
        name: 'Fresher Jobs',
        link: '/top-viec-lam-it-fresher?src=topdev.vn&medium=mainmenu',
        color: '#039FFE',
        icon: jsx(WiStars, {}),
    },
    {
        id: 7,
        name: 'NIPA',
        color: '#0B4DA1',
        link: '/nha-tuyen-dung/to-chuc/korean-it-companies-83771',
    },
];

var css_248z$3 = ".scroll-module_menuItem__3Cyxn {\n  position: relative;\n  font-size: 14px;\n  font-family: 'Inter', sans-serif;\n}\n.scroll-module_menuItem__3Cyxn::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 100%;\n  height: 1rem;\n  width: 100%;\n}\n.scroll-module_menuLink__0ixoI {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  border-radius: 9999px;\n  padding: 0.25rem 1rem;\n  font-weight: 600;\n  transition: background-color 0.3s;\n  text-decoration: none;\n}\n.scroll-module_menuLink__0ixoI:hover {\n  background-color: #fef4f2;\n}\n.scroll-module_nonScrollLink__4imw5 {\n  padding: 0.25rem 0.5rem;\n}\n.scroll-module_arrowIcon__hhSK0 {\n  transition: transform 0.3s;\n}\n.scroll-module_menuItem__3Cyxn:hover .scroll-module_arrowIcon__hhSK0 {\n  transform: rotate(180deg);\n}\n.scroll-module_submenu__Ux2oK {\n  position: absolute;\n  left: 0;\n  top: calc(100% + 0.5rem);\n  display: none;\n  width: max-content;\n  border-radius: 0.5rem;\n  background-color: white;\n  padding: 1.5rem 1rem;\n  box-shadow: 0px 0px 4px 0px #75757540;\n  transition: all 0.3s;\n  z-index: 50;\n}\n.scroll-module_menuItem__3Cyxn:hover .scroll-module_submenu__Ux2oK {\n  display: block;\n}\n.scroll-module_submenuLink__Deeb8 {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  border-radius: 0.25rem;\n  padding: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #5d5d5d;\n  transition: colors 0.3s;\n  text-decoration: none;\n}\n.scroll-module_submenuLink__Deeb8:hover {\n  background-color: #fef4f2;\n  color: #dd3f24;\n}\n.scroll-module_submenuLinkJobs__i0IYk {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  border-radius: 0.25rem;\n  padding: 0 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #5d5d5d;\n  transition: colors 0.3s;\n  text-decoration: none;\n}\n.scroll-module_submenuIcon__zJQPm {\n  color: #dd3f24;\n}\n.scroll-module_jobsContainer__EAvJx {\n  display: flex;\n  gap: 1rem;\n}\n.scroll-module_jobsList__is3ny {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.scroll-module_jobLink__dnRY8 {\n  display: flex;\n  height: 30px;\n  width: 246px;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 0.25rem;\n  padding: 0 0.25rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  background-color: transparent;\n  color: #5d5d5d;\n  text-decoration: none;\n}\n.scroll-module_jobLink__dnRY8:hover {\n  background-color: #fef4f2;\n  color: #dd3f24;\n}\n.scroll-module_jobLink__dnRY8:hover * {\n  color: #dd3f24;\n}\n.scroll-module_divider__r3px6 {\n  height: 200px;\n  width: 1px;\n  background-color: #fed2ca;\n}\n.scroll-module_dividerSmall__P44BO {\n  height: 20px;\n  width: 1px;\n  background-color: #fed2ca;\n}\n.scroll-module_jobButtons__ozJn0 {\n  display: flex;\n  height: fit-content;\n  width: 600px;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  padding: 1.5rem 0;\n  max-height: 180px;\n  overflow-y: auto;\n}\n.scroll-module_jobButton__1bNEX {\n  height: 30px;\n  border-radius: 9999px;\n  padding: 0 1.5rem;\n  font-size: 0.875rem;\n  line-height: 14px;\n  transition: colors 0.3s;\n}\n.scroll-module_jobButtonActive__hHdT3 {\n  background-color: #fee6e2;\n  color: #dd3f24;\n}\n.scroll-module_jobButtonInactive__RfpKl {\n  background-color: #f6f6f6;\n  color: #4f4f4f;\n}\n.scroll-module_footer__jqE5q {\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #fed2ca;\n  display: flex;\n  justify-content: flex-end;\n  height: fit-content;\n}\n.scroll-module_footerButtons__aOaQ7 {\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.scroll-module_cancelButton__45ujc {\n  border-radius: 56px;\n  background-color: #e7e7e7;\n  padding: 5px 1.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #404040;\n}\n.scroll-module_selectButton__D-AnC {\n  border-radius: 56px;\n  background-color: #dd3f24;\n  padding: 5px 1.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: white;\n}\n.scroll-module_clearButton__Idpe- {\n  color: #dd3f24;\n  font-size: 14px;\n  background-color: transparent;\n}\nbutton {\n  border: none;\n  cursor: pointer;\n}\n";
var styles$3 = {"menuItem":"scroll-module_menuItem__3Cyxn","menuLink":"scroll-module_menuLink__0ixoI","nonScrollLink":"scroll-module_nonScrollLink__4imw5","arrowIcon":"scroll-module_arrowIcon__hhSK0","submenu":"scroll-module_submenu__Ux2oK","submenuLink":"scroll-module_submenuLink__Deeb8","submenuLinkJobs":"scroll-module_submenuLinkJobs__i0IYk","submenuIcon":"scroll-module_submenuIcon__zJQPm","jobsContainer":"scroll-module_jobsContainer__EAvJx","jobsList":"scroll-module_jobsList__is3ny","jobLink":"scroll-module_jobLink__dnRY8","divider":"scroll-module_divider__r3px6","dividerSmall":"scroll-module_dividerSmall__P44BO","jobButtons":"scroll-module_jobButtons__ozJn0","jobButton":"scroll-module_jobButton__1bNEX","jobButtonActive":"scroll-module_jobButtonActive__hHdT3","jobButtonInactive":"scroll-module_jobButtonInactive__RfpKl","footer":"scroll-module_footer__jqE5q","footerButtons":"scroll-module_footerButtons__aOaQ7","cancelButton":"scroll-module_cancelButton__45ujc","selectButton":"scroll-module_selectButton__D-AnC","clearButton":"scroll-module_clearButton__Idpe-"};
styleInject(css_248z$3);

const MagicScroll = ({ isNonScroll = false, categories, }) => {
    const [roles, setRoles] = useState([]);
    const [activeButtons, setActiveButtons] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const dropdownRefs = useRef([]);
    useEffect(() => {
        if (categories.length > 0) {
            const searchParams = new URLSearchParams(window.location.search);
            const categoryIds = searchParams.get('category_id');
            if (categoryIds) {
                const ids = categoryIds.split(',').map(Number);
                setActiveButtons(ids);
                const selectedRoles = [];
                categories.forEach((category) => {
                    category.roles?.forEach((role) => {
                        if (ids.includes(role.id)) {
                            selectedRoles.push(role);
                        }
                    });
                });
                setRoles(selectedRoles);
            }
        }
    }, [categories]);
    const handleMouseEnter = (index) => {
        if (dropdownRefs.current[index]) {
            dropdownRefs.current[index].style.display = 'block';
        }
    };
    const handleMouseLeave = (index) => {
        if (dropdownRefs.current[index])
            dropdownRefs.current[index].style.display = 'none';
    };
    const handleClose = (index) => {
        if (dropdownRefs.current[index])
            dropdownRefs.current[index].style.display = 'none';
    };
    const handleButtonClick = (buttonId, role) => {
        setActiveButtons((prev) => {
            if (prev.includes(buttonId)) {
                return prev.filter((id) => id !== buttonId);
            }
            return [...prev, buttonId];
        });
        setRoles((prev) => {
            if (prev.some((item) => item.id === role.id)) {
                return prev.filter((item) => item.id !== role.id);
            }
            return [...prev, role];
        });
    };
    const handleClickJobs = () => {
        if (roles.length === 0)
            return;
        const params = roles.map((role) => role.id).join(',');
        const locate = 'it-jobs';
        const url = `/${locate}/?category_id=${params}`;
        window.location.href = url;
    };
    const handleRemoveCheck = () => {
        setActiveButtons([]);
        setRoles([]);
    };
    return (jsx(Fragment, { children: LIST_MENU$1.map((item, index) => (jsxs("div", { onMouseEnter: () => handleMouseEnter(index), onMouseLeave: () => handleMouseLeave(index), className: styles$3.menuItem, children: [jsxs("a", { href: item.link ?? '/', className: `${styles$3.menuLink} ${isNonScroll ? styles$3.nonScrollLink : ''}`, style: { color: item.color ?? '#404040' }, children: [item.icon, item.name, item.subMenu && jsx(IoIosArrowDown, {})] }), item?.subMenu && item?.name !== 'Jobs' && (jsx("div", { className: styles$3.submenu, children: item.subMenu.map((subItem) => (jsxs("a", { href: subItem.link, className: styles$3.submenuLink, children: [jsx("span", { className: styles$3.submenuIcon, children: subItem.icon }), subItem.name] }, subItem.id))) })), categories?.length > 0 && item?.subMenu && item?.name === 'Jobs' && (jsxs("div", { ref: (el) => {
                        dropdownRefs.current[index] = el;
                    }, className: styles$3.submenu, children: [jsxs("div", { className: styles$3.jobsContainer, children: [jsx("div", { className: styles$3.jobsList, children: categories.map((category) => (jsxs("button", { onMouseEnter: () => setSelectedCategory(category), className: styles$3.jobLink, children: [jsxs("div", { className: styles$3.submenuLinkJobs, children: [jsx("span", { className: styles$3.submenuIcon }), category.name] }), jsx(IoIosArrowForward, {})] }, category.id))) }), jsx("div", { className: styles$3.divider }), jsx("div", { className: styles$3.jobButtons, children: selectedCategory?.roles?.map((role) => (jsx("button", { onClick: () => handleButtonClick(role.id, role), className: `${styles$3.jobButton} ${activeButtons.includes(role.id)
                                            ? styles$3.jobButtonActive
                                            : styles$3.jobButtonInactive}`, children: role.name }, role.id))) })] }), jsx("div", { className: styles$3.footer, children: jsxs("div", { className: styles$3.footerButtons, children: [activeButtons.length > 0 && (jsxs(Fragment, { children: [jsxs("button", { className: styles$3.clearButton, onClick: handleRemoveCheck, children: ["B\u1ECF ch\u1ECDn t\u1EA5t c\u1EA3 (", activeButtons.length, ")"] }), jsx("div", { className: styles$3.dividerSmall })] })), jsx("button", { onClick: () => handleClose(index), className: styles$3.cancelButton, children: "Hu\u1EF7" }), jsx("button", { onClick: handleClickJobs, className: styles$3.selectButton, children: "Ch\u1ECDn" })] }) })] }))] }, index))) }));
};

var css_248z$2 = ".style-module_accountContainer__YN0BE {\n  position: relative;\n  margin-right: 0.5rem;\n  border-radius: 9999px;\n  background-color: var(--primary-color);\n  color: white;\n  font-family: 'Inter', sans-serif;\n}\n\n.style-module_accountButton__6CA2p {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  height: 32px;\n  padding: 0 0.5rem;\n  transition: all 0.3s;\n}\n\n.style-module_accountButton__6CA2p svg {\n  width: 100%;\n  height: 100%;\n  color: white;\n}\n\n.style-module_accountIcon__BY1KY {\n  height: 1.25rem;\n  width: 1.25rem;\n}\n\n.style-module_accountName__E2EjA {\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  font-size: 0.875rem;\n  color: white;\n}\n\n.style-module_arrowIcon__g85dz {\n  height: 1rem;\n  width: 1rem;\n  transition: transform 0.5s;\n}\n\n.style-module_arrowIconRotated__wK5NG {\n  transform: rotate(180deg);\n}\n\n.style-module_dropdownMenu__rnm4A {\n  position: absolute;\n  right: 0;\n  top: 100%;\n  z-index: 50;\n  margin-top: 0.5rem;\n  width: max-content;\n  transform: translateX(50%);\n  border-radius: 0.5rem;\n  background-color: white;\n  padding: 0.5rem;\n  box-shadow: 0px 0px 4px 0px #75757540;\n  transition: all 0.3s;\n}\n\n.style-module_dropdownHidden__x075O {\n  visibility: hidden;\n  transform: translateX(50%) translateY(0.5rem);\n  opacity: 0;\n}\n\n.style-module_dropdownVisible__qSUTD {\n  visibility: visible;\n  transform: translateX(50%) translateY(0);\n  opacity: 1;\n}\n\n.style-module_menuItem__GbPAU {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  border-radius: 0.5rem;\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  color: #6d6d6d;\n  transition: all 0.3s;\n  text-decoration: none;\n}\n\n.style-module_menuItem__GbPAU:hover {\n  background-color: #fef4f2;\n  color: var(--primary-color);\n}\n\n.style-module_menuIcon__hVpzL {\n  font-size: 1.125rem;\n}\n\n.style-module_menuIcon__hVpzL svg {\n  width: 14px;\n  height: 14px;\n}\n";
var styles$2 = {"accountContainer":"style-module_accountContainer__YN0BE","accountButton":"style-module_accountButton__6CA2p","accountIcon":"style-module_accountIcon__BY1KY","accountName":"style-module_accountName__E2EjA","arrowIcon":"style-module_arrowIcon__g85dz","arrowIconRotated":"style-module_arrowIconRotated__wK5NG style-module_arrowIcon__g85dz","dropdownMenu":"style-module_dropdownMenu__rnm4A","dropdownHidden":"style-module_dropdownHidden__x075O style-module_dropdownMenu__rnm4A","dropdownVisible":"style-module_dropdownVisible__qSUTD style-module_dropdownMenu__rnm4A","menuItem":"style-module_menuItem__GbPAU","menuIcon":"style-module_menuIcon__hVpzL"};
styleInject(css_248z$2);

const MENU_CONFIG = {
    account: {
        resume: [
            {
                type: 'default',
                href: '/users/profile?src=topdev.vn&medium=submenu',
                title: 'Dashboard',
                icon: jsx(DashboardUs, {}),
            },
            {
                type: 'default',
                href: '/users/job-management?src=topdev.vn&medium=userprofilemenu',
                title: 'Job Management',
                icon: jsx(JobManagement, {}),
            },
            {
                type: 'default',
                href: '/users/my-cv?src=topdev.vn&medium=submenu',
                title: 'CV Management',
                icon: jsx(CvManagementUs, {}),
            },
            {
                type: 'default',
                href: '/users/jobs-applied?src=topdev.vn&medium=submenu',
                title: 'Applied Jobs',
                icon: jsx(AppliedJobsUs, {}),
            },
            {
                type: 'default',
                href: '/users/jobs-followed?src=topdev.vn&medium=submenu',
                title: 'Following Jobs',
                icon: jsx(FollowingJobsUs, {}),
            },
            {
                type: 'default',
                href: '/users/personality-test?src=topdev.vn&medium=submenu',
                title: 'Personality Test',
                icon: jsx(Gear, {}),
            },
            {
                type: 'logout',
                href: '/logout',
                title: 'Logout',
                icon: jsx(LogoutUs, {}),
            },
        ],
        employer: [
            {
                type: 'default',
                href: '/employer/dashboard',
                title: 'Employer Dashboard',
                icon: jsx(DashboardUs, {}),
            },
            {
                type: 'default',
                href: '/products',
                title: 'Recruitment Services',
                icon: jsx(CvManagementUs, {}),
            },
            {
                type: 'logout',
                href: '/logout',
                title: 'Logout',
                icon: jsx(LogoutUs, {}),
            },
        ],
    },
};

const SubMenu = ({ user, type = 'resume' }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const menuItems = MENU_CONFIG.account[type];
    return (jsxs("div", { className: styles$2.accountContainer, children: [jsxs("button", { onClick: () => setIsDropdownOpen(!isDropdownOpen), className: styles$2.accountButton, children: [jsx("span", { className: styles$2.accountIcon, children: jsx(MdAccountCircle, {}) }), jsx("span", { className: styles$2.accountName, children: user?.display_name ?? 'user' }), jsx("span", { className: isDropdownOpen ? styles$2.arrowIconRotated : styles$2.arrowIcon, children: jsx(ArrowDown, {}) })] }), jsx("div", { className: isDropdownOpen ? styles$2.dropdownVisible : styles$2.dropdownHidden, children: menuItems.map((item, index) => {
                    return (jsxs("a", { href: item.href, className: styles$2.menuItem, children: [jsx("span", { className: styles$2.menuIcon, children: item.icon }), item.title] }, index));
                }) })] }));
};

function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);
    return debouncedValue;
}

const InputSearch = ({ lang = 'vi' }) => {
    const [isOpenSuggest, setIsOpenSuggest] = useState(false);
    const [search, setSearch] = useState('');
    const debouncedSuggest = useDebounce(search, 300);
    const [suggestData, setSuggestData] = useState([]);
    const suggestRef = useRef(null);
    const handleClickInputSearch = () => {
        if (suggestData.length && !isOpenSuggest) {
            setIsOpenSuggest(true);
        }
    };
    const handleChangeSearch = async (event) => {
        setSearch(event.target.value);
    };
    const handleSuggestedKeywords = async () => {
        if (search) {
            try {
                const response = await getSuggestedKeywords.get(search);
                setSuggestData(response);
                setIsOpenSuggest(true);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            }
            catch (err) {
                throw Error('Can not get suggested keywords!');
            }
        }
        else {
            setIsOpenSuggest(false);
            setSuggestData([]);
        }
    };
    const handleClickSuggest = (suggestItem) => {
        const locate = lang === 'vie' ? 'it-jobs' : 'viec-lam-it';
        const formattedUrl = `/${locate}/${suggestItem.slug}-kt${suggestItem.id}`;
        window.location.href = formattedUrl;
        setIsOpenSuggest(false);
    };
    useEffect(() => {
        document.addEventListener('click', handleClickDocument);
        return () => {
            document.removeEventListener('click', handleClickDocument);
        };
    }, [isOpenSuggest]);
    useEffect(() => {
        handleSuggestedKeywords();
    }, [debouncedSuggest]);
    const handleClickDocument = (event) => {
        if (isOpenSuggest &&
            suggestRef.current &&
            !suggestRef.current.contains(event.target)) {
            setIsOpenSuggest((prev) => !prev);
        }
    };
    return (jsxs("div", { className: styles$5.containerSearch, children: [jsx("input", { type: "text", className: styles$5.input, placeholder: "Search...", onChange: handleChangeSearch, value: search, onClick: handleClickInputSearch }), jsx("button", { className: styles$5.button, children: jsx(SearchIcon, {}) }), isOpenSuggest && suggestData.length > 0 && (jsx("div", { ref: suggestRef, className: styles$5.suggestContainer, children: jsx("div", { className: styles$5.suggestList, children: suggestData.map((suggestItem) => (jsx("button", { className: styles$5.suggestItem, onClick: () => handleClickSuggest(suggestItem), children: suggestItem.keyword }, suggestItem.id))) }) }))] }));
};

// interface NotificationItem {
//   id: string;
//   title: string;
//   message: string;
//   createdAt: string;
// }
const Notification = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target)) {
                // setNotifications([1,2,3])
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    return (jsxs("div", { className: styles$5.notificationContainer, ref: dropdownRef, children: [jsx("button", { className: styles$5.buttonNotification, onClick: () => setIsOpen(!isOpen), children: jsx(NotificationTop, {}) }), jsx("div", { className: isOpen
                    ? styles$5.notificationDropdownVisible
                    : styles$5.notificationDropdown, children: jsx("div", { className: styles$5.notificationHeader, children: jsx("h3", { className: styles$5.notificationTitle, children: "Notifications" }) }) })] }));
};

const HeaderButtonsNotLogin = ({ isSticky = false }) => {
    const handleClickLogin = () => {
        if (typeof window !== 'undefined') {
            window.location.href =
                'https://accounts.topdev.vn/' +
                    '?redirect_uri=' +
                    encodeURIComponent(window?.location.href);
        }
    };
    return (jsxs(Fragment, { children: [!isSticky && (jsxs("a", { href: "tel:0888 1555 00", className: styles$5.hiddenButtons, children: [jsx("span", { className: styles$5.iconWrapper, children: jsx(FaPhoneAlt, {}) }), jsx("span", { children: "0888 1555 00" })] })), !isSticky && (jsxs("a", { href: "https://accounts.topdev.vn/", className: styles$5.hiddenEmployer, children: [jsx("span", { className: styles$5.iconWrapper, children: jsx(Employer, {}) }), jsx("span", { children: "Employer" })] })), !isSticky && jsx("div", { className: styles$5.divider }), jsxs("button", { onClick: handleClickLogin, className: styles$5.loginButton, children: [jsx(FaUser, {}), jsx("span", { children: "Log in" })] })] }));
};
const HeaderButtonsLogin = ({ isSticky = false }) => {
    return (jsxs(Fragment, { children: [!isSticky && (jsxs("a", { href: "tel:0888 1555 00", className: styles$5.hiddenButtons, children: [jsx("span", { className: styles$5.iconWrapper, children: jsx(FaPhoneAlt, {}) }), jsx("span", { children: "0888 1555 00" })] })), !isSticky && jsx("div", { className: styles$5.divider }), jsx(SubMenu, {}), isSticky ? jsx(Fragment, {}) : jsx(Notification, {})] }));
};
const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [locale, setLocale] = useState('vi');
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getCategory = async () => {
            try {
                const categories = await getCategories.get();
                setCategories(categories);
            }
            catch (err) {
                console.error('Error fetching categories:', err);
            }
        };
        getCategory();
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window?.scrollY;
            setIsSticky(scrollPosition > 50);
        };
        handleScroll();
        window?.addEventListener('scroll', handleScroll);
        return () => window?.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        const checkIsLogin = async () => {
            try {
                const isLogin = await checkLogin.get();
                setIsLogin(isLogin);
            }
            catch (err) {
                console.error('Error fetching categories:', err);
            }
        };
        checkIsLogin();
    }, []);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const cookieLocale = api.get('topdev_locale');
            if (cookieLocale === 'en' || cookieLocale === 'vi') {
                setLocale(cookieLocale);
            }
        }
    }, []);
    const handleChangeLocale = (lang) => {
        if (typeof window !== 'undefined') {
            if (lang === locale)
                return;
            const currentUrl = window?.location.href;
            const redirectUri = encodeURIComponent(currentUrl);
            window.location.href = `/${lang}?redirect_uri=${redirectUri}`;
        }
    };
    return (jsxs(Fragment, { children: [jsxs("header", { className: isSticky ? styles$5.headerShadow : styles$5.header, children: [jsxs("div", { className: styles$5.container, children: [jsxs("div", { className: isSticky ? styles$5.groupSearchSticky : styles$5.groupSearch, children: [jsx("a", { href: "/", children: jsx("img", { className: styles$5.logo, src: "https://c.topdevvn.com/v4/assets/images/td-logo.png", alt: "topdev-logo" }) }), isSticky && (jsx("div", { className: styles$5.stickyMenu, children: jsx(MagicScroll, { isNonScroll: true, categories: categories }) })), jsx("div", { className: isSticky
                                            ? styles$5.searchContainerSticky
                                            : styles$5.searchContainerNonSticky, children: jsx(InputSearch, {}) })] }), jsxs("div", { className: styles$5.loginContainer, children: [isLogin ? (jsx(HeaderButtonsLogin, { isSticky: isSticky })) : (jsx(HeaderButtonsNotLogin, { isSticky: isSticky })), isSticky ? (jsx(Fragment, {})) : (jsx("div", { className: styles$5.containerSwitch, children: jsx("button", { onClick: () => handleChangeLocale(locale === 'vi' ? 'en' : 'vi'), type: "button", className: styles$5.localeButton, children: locale === 'vi' ? 'En' : 'Vi' }) }))] })] }), jsx("div", { className: isSticky ? styles$5.dividerHidden : styles$5.dividerX })] }), jsx("div", { className: isSticky
                    ? styles$5.containerMenuScrollHidden
                    : styles$5.containerMenuScroll, children: jsx(MagicScroll, { categories: categories }) })] }));
};

const LIST_MENU = [
    {
        id: 1,
        name: 'Hot Jobs',
        icon: jsx(BsFire, {}),
        subMenu: [
            {
                id: 'A1',
                name: 'Top 100 Highest Salary',
                link: '/jobs/search?ordering=high_low_salary',
                icon: jsx(Top100Icon, {}),
            },
            {
                id: 'A2',
                name: 'By Location',
                link: '/',
                icon: jsx(IoLocationSharp, {}),
            },
            {
                id: 'A3',
                name: 'Recommend Jobs',
                link: '/',
                icon: jsx(BiSolidLike, {}),
            },
        ],
    },
    {
        id: 2,
        name: 'Jobs',
        icon: jsx(Jobs, {}),
        subMenu: [
            {
                id: 'IT',
                name: 'IT',
                link: '/',
                icon: jsx(ItGuy, {}),
            },
            {
                id: 'Business & Finance',
                name: 'Business & Finance',
                link: '/',
                icon: jsx(IoBarChart, {}),
            },
            {
                id: 'Management',
                name: 'Management',
                link: '/',
                icon: jsx(HiUsers, {}),
            },
            {
                id: 'Manufacturing & Engineer',
                name: 'Manufacturing & Engineer',
                link: '/',
                icon: jsx(Setting, {}),
            },
            {
                id: 'Service',
                name: 'Service',
                link: '/',
                icon: jsx(Service, {}),
            },
            {
                id: 'Design',
                name: 'Design',
                link: '/',
                icon: jsx(Design, {}),
            },
        ],
    },
    {
        id: 3,
        name: 'Company',
        link: '/',
        icon: jsx(Companies, {}),
    },
    {
        id: 4,
        name: 'Tools',
        icon: jsx(Tools, {}),
        subMenu: [
            {
                id: 'Create CV',
                name: 'Create CV',
                link: '/tao-cv-online?src=topdev.vn&medium=mainmenu',
                icon: jsx(CreateCv, {}),
            },
            {
                id: 'Convert CV',
                name: 'Convert CV',
                link: '/tao-cv-online?src=topdev.vn&medium=mainmenu',
                icon: jsx(ConvertCv, {}),
            },
            {
                id: 'Personality Test',
                name: 'Personality Test',
                link: '/page/trac-nghiem-tinh-cach?src=topdev.vn&medium=mainmenu',
                icon: jsx(BsFillEmojiSmileFill, {}),
            },
            {
                id: 'Salary',
                name: 'Salary',
                link: '/tool/tinh-luong-gross-net?src=topdev.vn&medium=mainmenu',
                icon: jsx(Salary, {}),
            },
            {
                id: 'Interview',
                name: 'Interview',
                link: '/interview?src=topdev.vn&medium=mainmenu',
                icon: jsx(Interview, {}),
            },
            {
                id: 'Blog',
                name: 'Blog',
                link: `/blog?src=topdev.vn&medium=mainmenu`,
                icon: jsx(Blog, {}),
            },
        ],
    },
    {
        id: 5,
        name: 'Blog',
        link: '/blog?src=topdev.vn&medium=mainmenu',
        icon: jsx(Blog, {}),
    },
    {
        id: 6,
        name: 'Fresher Jobs',
        link: '/top-viec-lam-it-fresher?src=topdev.vn&medium=mainmenu',
        icon: jsx(WiStars, {}),
    },
    {
        id: 7,
        name: 'NIPA',
        color: '#0B4DA1',
        link: '/nha-tuyen-dung/to-chuc/korean-it-companies-83771',
    },
    {
        id: 8,
        name: 'TopDev',
        icon: jsx(Topdev, {}),
        link: '/',
    },
];

var css_248z$1 = ".styles-module_container__EIonk {\n  display: flex;\n  align-items: center;\n  font-family: 'Inter', sans-serif;\n}\n.styles-module_container__EIonk button {\n  background-color: transparent;\n  padding: 0;\n  margin: 0;\n}\n.styles-module_divider__PU999 {\n  width: 1px;\n  height: 1rem;\n  background-color: #e5e7eb;\n}\n.styles-module_button__-5cJQ {\n  padding: 0 0.5rem;\n  text-transform: uppercase;\n  transition: all 0.3s;\n  color: #9ca3af;\n}\n.styles-module_buttonActive__HwOxT {\n  font-weight: 700;\n  color: var(--primary-color);\n}\n";
var styles$1 = {"container":"styles-module_container__EIonk","divider":"styles-module_divider__PU999","button":"styles-module_button__-5cJQ","buttonActive":"styles-module_buttonActive__HwOxT styles-module_button__-5cJQ"};
styleInject(css_248z$1);

const SwitchLocale = ({ defaultLocale = 'vi' }) => {
    const [locale, setLocale] = useState(defaultLocale);
    useEffect(() => {
        const cookieLocale = api.get('topdev_locale');
        if (cookieLocale === 'en' || cookieLocale === 'vi') {
            setLocale(cookieLocale);
        }
    }, []);
    const handleChangeLocale = (lang) => {
        if (lang === locale)
            return;
        const currentUrl = window.location.href;
        const redirectUri = encodeURIComponent(currentUrl);
        window.location.href = `/${lang}?redirect_uri=${redirectUri}`;
    };
    return (jsxs("div", { className: styles$1.container, children: [jsx("button", { onClick: () => handleChangeLocale('en'), type: "button", className: locale === 'en' ? styles$1.buttonActive : styles$1.button, children: "En" }), jsx("div", { className: styles$1.divider }), jsx("button", { onClick: () => handleChangeLocale('vi'), type: "button", className: locale === 'vi' ? styles$1.buttonActive : styles$1.button, children: "Vi" })] }));
};

var css_248z = ".styles-module_container__0bjfq {\n  position: relative;\n  overflow: hidden;\n  font-family: 'Inter', sans-serif;\n}\n\n.styles-module_menuButton__3fOfe {\n  background-color: transparent;\n  text-align: center;\n}\n\n.styles-module_menuIcon__HBM-W svg {\n  width: 14px;\n  height: 14px;\n}\n\n.styles-module_drawer__dqGeH {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 60;\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background-color: white;\n  transition: all 0.3s ease;\n}\n\n.styles-module_drawerHidden__mH8EZ {\n  visibility: hidden;\n  transform: translateX(-100%);\n  opacity: 0;\n}\n\n.styles-module_drawerVisible__K-O-p {\n  visibility: visible;\n  transform: translateX(0);\n  opacity: 1;\n}\n\n.styles-module_header__DY4L- {\n  position: relative;\n  padding: 1rem;\n  padding-bottom: 5rem;\n}\n\n.styles-module_headerContent__Y5FLU {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n\n.styles-module_headerContent__Y5FLU button {\n  background-color: transparent;\n}\n\n.styles-module_logo__ELU0r {\n  display: block;\n  height: 2.25rem;\n  width: 7rem;\n}\n\n.styles-module_logoImage__BOPXi {\n  height: 100%;\n  width: 100%;\n  max-width: 100%;\n  object-fit: contain;\n}\n\n.styles-module_divider__rOME6 {\n  margin-top: 0.5rem;\n  height: 1px;\n  background-color: #fed2ca;\n}\n\n.styles-module_content__dg26R {\n  margin-top: 0.75rem;\n  display: flex;\n  gap: 0.75rem;\n}\n\n.styles-module_menuList__qu0ee {\n  width: fit-content;\n}\n\n.styles-module_menuItem__hOXnm {\n  display: flex;\n  height: 48px;\n  width: 88px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.25rem;\n  border-radius: 4px;\n  font-weight: 500;\n  color: #4f4f4f;\n  text-decoration: none;\n  transition: colors 0.3s;\n}\n\n.styles-module_menuItemActive__S0j-m {\n  background-color: #fef4f2;\n  color: var(--primary-color);\n}\n\n.styles-module_menuName__ZLPqg {\n  text-wrap: nowrap;\n  font-size: 0.75rem;\n  transition: colors 0.3s;\n}\n\n.styles-module_menuNameNIPA__2F3E- {\n  font-weight: bold;\n}\n\n.styles-module_subMenuContainer__Osiv0 {\n  width: 100%;\n  max-height: 70vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.styles-module_subMenuItem__mXcsw {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: 0.5rem;\n  border-radius: 4px;\n  padding: 0.75rem 0.5rem;\n  color: #5d5d5d;\n  text-decoration: none;\n  transition: transform 0.3s;\n}\n\n.styles-module_subMenuItem__mXcsw svg {\n  width: 10px;\n  height: 10px;\n}\n\n.styles-module_subMenuItemActive__rety4 {\n  background-color: #fef4f2;\n  color: var(--primary-color);\n}\n\n.styles-module_subMenuText__S-3uU {\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n\n.styles-module_jobsContainer__lwgng {\n  margin-bottom: 0.25rem;\n}\n\n.styles-module_jobButton__5HL2B {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 4px;\n  padding-right: 0.75rem;\n  color: #5d5d5d;\n  background-color: transparent;\n  transition: transform 0.3s;\n}\n\n.styles-module_jobButtonActive__vf9Kl {\n  background-color: #fef4f2;\n  color: var(--primary-color);\n}\n\n.styles-module_jobButtonContent__5P8J2 {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n}\n\n.styles-module_jobButtonArrow__mKH2Q {\n  transition: transform 0.3s;\n}\n\n.styles-module_jobButtonArrowExpanded__n6-Nd {\n  transform: rotate(180deg);\n}\n\n.styles-module_jobOptionsContainer__NPSFM {\n  overflow: hidden;\n  padding-left: 0.75rem;\n  transition: all 0.3s;\n}\n\n.styles-module_jobOptionsExpanded__b9tk9 {\n  max-height: 500px;\n  opacity: 1;\n}\n\n.styles-module_jobOptionsCollapsed__eBLSo {\n  max-height: 0;\n  opacity: 0;\n}\n\n.styles-module_jobOptionsList__flcb0 {\n  margin-top: 0.25rem;\n  display: flex;\n  height: fit-content;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n  border-left: 1px solid #fed2ca;\n  padding: 0.25rem 0.5rem;\n}\n\n.styles-module_jobOption__u6nZ8 {\n  height: 18px;\n  border-radius: 9999px;\n  padding: 0 1rem;\n  font-size: 10px;\n  line-height: 14px;\n  transition: colors 0.3s;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n}\n\n.styles-module_jobOptionActive__Umev0 {\n  background-color: #fee6e2;\n  color: var(--primary-color);\n}\n\n.styles-module_jobOptionInactive__HoQC8 {\n  background-color: #f6f6f6;\n  color: #4f4f4f;\n}\n\n.styles-module_footer__hHUUh {\n  position: fixed;\n  bottom: 1rem;\n  padding: 0 1rem;\n  width: 100%;\n}\n\n.styles-module_footerContent__9h5JW {\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: center;\n  border-top: 1px solid #fed2ca;\n  padding-top: 1rem;\n  padding-left: 0.5rem;\n  width: 100%;\n}\n\n.styles-module_footerButtons__JmicN {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  justify-content: space-between;\n  padding-bottom: 20px;\n}\n\n.styles-module_cancelButton__SZW5w {\n  background-color: #e7e7e7;\n  border-radius: 56px;\n  width: 88px;\n  height: 24px;\n  color: #404040;\n  font-size: 14px;\n}\n\n.styles-module_selectButton__Hk-UD {\n  background-color: #dd3f24;\n  color: white;\n}\n\n.styles-module_clearButton__HJe5d {\n  color: #dd3f24;\n  background-color: transparent;\n  font-size: 10px;\n}\n\n.styles-module_groupButton__qUd7s {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding-right: 30px;\n}\n";
var styles = {"container":"styles-module_container__0bjfq","menuButton":"styles-module_menuButton__3fOfe","menuIcon":"styles-module_menuIcon__HBM-W","drawer":"styles-module_drawer__dqGeH","drawerHidden":"styles-module_drawerHidden__mH8EZ styles-module_drawer__dqGeH","drawerVisible":"styles-module_drawerVisible__K-O-p styles-module_drawer__dqGeH","header":"styles-module_header__DY4L-","headerContent":"styles-module_headerContent__Y5FLU","logo":"styles-module_logo__ELU0r","logoImage":"styles-module_logoImage__BOPXi","divider":"styles-module_divider__rOME6","content":"styles-module_content__dg26R","menuList":"styles-module_menuList__qu0ee","menuItem":"styles-module_menuItem__hOXnm","menuItemActive":"styles-module_menuItemActive__S0j-m styles-module_menuItem__hOXnm","menuName":"styles-module_menuName__ZLPqg","menuNameNIPA":"styles-module_menuNameNIPA__2F3E- styles-module_menuName__ZLPqg","subMenuContainer":"styles-module_subMenuContainer__Osiv0","subMenuItem":"styles-module_subMenuItem__mXcsw","subMenuItemActive":"styles-module_subMenuItemActive__rety4 styles-module_subMenuItem__mXcsw","subMenuText":"styles-module_subMenuText__S-3uU","jobsContainer":"styles-module_jobsContainer__lwgng","jobButton":"styles-module_jobButton__5HL2B","jobButtonActive":"styles-module_jobButtonActive__vf9Kl styles-module_jobButton__5HL2B","jobButtonContent":"styles-module_jobButtonContent__5P8J2","jobButtonArrow":"styles-module_jobButtonArrow__mKH2Q","jobButtonArrowExpanded":"styles-module_jobButtonArrowExpanded__n6-Nd styles-module_jobButtonArrow__mKH2Q","jobOptionsContainer":"styles-module_jobOptionsContainer__NPSFM","jobOptionsExpanded":"styles-module_jobOptionsExpanded__b9tk9 styles-module_jobOptionsContainer__NPSFM","jobOptionsCollapsed":"styles-module_jobOptionsCollapsed__eBLSo styles-module_jobOptionsContainer__NPSFM","jobOptionsList":"styles-module_jobOptionsList__flcb0","jobOption":"styles-module_jobOption__u6nZ8","jobOptionActive":"styles-module_jobOptionActive__Umev0 styles-module_jobOption__u6nZ8","jobOptionInactive":"styles-module_jobOptionInactive__HoQC8 styles-module_jobOption__u6nZ8","footer":"styles-module_footer__hHUUh","footerContent":"styles-module_footerContent__9h5JW","footerButtons":"styles-module_footerButtons__JmicN","cancelButton":"styles-module_cancelButton__SZW5w","selectButton":"styles-module_selectButton__Hk-UD styles-module_cancelButton__SZW5w","clearButton":"styles-module_clearButton__HJe5d","groupButton":"styles-module_groupButton__qUd7s"};
styleInject(css_248z);

const DrawerMenu = ({ children }) => {
    const [isShow, setIsShow] = useState(false);
    const menuRef = useRef(null);
    const [expandedItem, setExpandedItem] = useState();
    const [activeButton, setActiveButton] = useState();
    const [roles, setRoles] = useState([]);
    const [activeButtons, setActiveButtons] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const [activeMenu, setActiveMenu] = useState(LIST_MENU[0] || null);
    const handleButtonClick = (buttonId, role) => {
        setActiveButtons((prev) => {
            if (prev.includes(buttonId)) {
                return prev.filter((id) => id !== buttonId);
            }
            return [...prev, buttonId];
        });
        setRoles((prev) => {
            if (prev.some((item) => item.id === role.id)) {
                return prev.filter((item) => item.id !== role.id);
            }
            return [...prev, role];
        });
    };
    const toggleExpand = (subMenuId) => {
        setExpandedItem((categoryId) => subMenuId === categoryId ? null : subMenuId);
    };
    useEffect(() => {
        const getCategory = async () => {
            try {
                const categories = await getCategories.get();
                setCategories(categories);
            }
            catch (err) {
                console.error('Error fetching categories:', err);
            }
        };
        getCategory();
    }, []);
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const categoryIds = searchParams.get('category_id');
        if (categoryIds) {
            const ids = categoryIds.split(',').map(Number);
            setActiveButtons(ids);
            // Find and set roles based on category IDs
            const selectedRoles = [];
            categories.forEach((category) => {
                category.roles?.forEach((role) => {
                    if (ids.includes(role.id)) {
                        selectedRoles.push(role);
                    }
                });
            });
            setRoles(selectedRoles);
        }
    }, [categories]);
    const handleRemoveCheck = () => {
        setActiveButtons([]);
        setRoles([]);
    };
    const handleClickJobs = () => {
        if (roles.length === 0)
            return;
        const params = roles.map((role) => role.id).join(',');
        const locate = 'it-jobs';
        const url = `/${locate}/?category_id=${params}`;
        window.location.href = url;
    };
    return (jsxs("div", { id: "NavigationMenu", className: styles.container, ref: menuRef, children: [jsx("button", { onClick: () => setIsShow(true), className: styles.menuButton, role: "button", "aria-label": "Menu", "aria-labelledby": "labelmenu", tabIndex: -1, children: children }), jsxs("div", { className: isShow ? styles.drawerVisible : styles.drawerHidden, children: [jsxs("div", { className: styles.header, children: [jsxs("div", { className: styles.headerContent, children: [jsx("a", { href: "/", className: styles.logo, children: jsx("img", { src: "https://c.topdevvn.com/v4/assets/images/td-logo.png", width: 114, height: 22, loading: "lazy", className: styles.logoImage, alt: "TopDev" }) }), jsx("button", { role: "button", onClick: () => setIsShow(false), children: jsx(MdClear, {}) })] }), jsx("div", { className: styles.divider }), jsxs("div", { className: styles.content, children: [jsx("div", { className: styles.menuList, children: LIST_MENU.map((menu) => (jsxs("a", { href: menu?.link ?? '#', className: activeMenu?.id === menu.id
                                                ? styles.menuItemActive
                                                : styles.menuItem, onClick: () => setActiveMenu(menu), children: [jsx("span", { className: styles.menuIcon, children: menu?.icon }), jsx("span", { style: { color: menu?.color ?? '' }, className: menu?.name === 'NIPA'
                                                        ? styles.menuNameNIPA
                                                        : styles.menuName, children: menu?.name })] }, menu?.id))) }), activeMenu?.subMenu && activeMenu?.name !== 'Jobs' && (jsx("div", { className: styles.subMenuContainer, children: activeMenu?.subMenu.map((subMenu) => (jsxs("a", { href: subMenu?.link ?? '#', className: activeButton === subMenu?.id
                                                ? styles.subMenuItemActive
                                                : styles.subMenuItem, onClick: () => setActiveButton(subMenu.id), children: [subMenu?.icon, jsx("span", { className: styles.subMenuText, children: subMenu?.name })] }, subMenu?.id))) })), categories?.length > 0 && activeMenu?.name === 'Jobs' && (jsx("div", { className: styles.subMenuContainer, children: categories.map((category) => (jsxs("div", { className: styles.jobsContainer, children: [jsxs("button", { className: expandedItem === category.id
                                                        ? styles.jobButtonActive
                                                        : styles.jobButton, onClick: () => {
                                                        setSelectedCategory(category);
                                                        toggleExpand(category.id);
                                                    }, children: [jsx("div", { className: styles.jobButtonContent, children: jsx("span", { className: styles.subMenuText, children: category?.name }) }), jsx("span", { className: expandedItem === category.id
                                                                ? styles.jobButtonArrowExpanded
                                                                : styles.jobButtonArrow, children: jsx(IoIosArrowDown, {}) })] }), jsx("div", { className: expandedItem === category.id
                                                        ? styles.jobOptionsExpanded
                                                        : styles.jobOptionsCollapsed, children: jsx("div", { className: styles.jobOptionsList, children: selectedCategory?.roles?.map((role) => (jsx("button", { onClick: () => handleButtonClick(role.id, role), className: activeButtons.includes(role.id)
                                                                ? styles.jobOptionActive
                                                                : styles.jobOptionInactive, children: role.name }, role.id))) }) })] }, category?.id))) }))] })] }), jsxs("div", { className: styles.footer, children: [activeButtons.length > 0 && (jsxs("div", { className: styles.footerButtons, children: [jsxs(Fragment, { children: [jsxs("button", { className: styles.clearButton, onClick: handleRemoveCheck, children: ["B\u1ECF ch\u1ECDn t\u1EA5t c\u1EA3 (", activeButtons.length, ")"] }), jsx("div", { className: styles.dividerSmall })] }), jsxs("div", { className: styles.groupButton, children: [jsx("button", { role: "button", onClick: () => setIsShow(false), className: styles.cancelButton, children: "Hu\u1EF7" }), jsx("button", { onClick: handleClickJobs, className: styles.selectButton, children: "Ch\u1ECDn" })] })] })), jsxs("div", { className: styles.footerContent, children: [jsx(Translate, {}), jsx(SwitchLocale, {})] })] })] })] }));
};

const MENU_LIST = [
    {
        id: 'home',
        name: 'Home',
        link: '/',
        icon: jsx(House, {}),
    },
    {
        id: 'hot jobs',
        name: 'Hot Jobs',
        icon: jsx(HotJob, {}),
        subMenu: [
            {
                id: 'yop 100 Highest Salary',
                name: 'Top 100 Highest Salary',
                link: '/jobs/search?ordering=high_low_salary',
                icon: jsx(Top100Icon, {}),
            },
            {
                id: 'By Location',
                name: 'By Location',
                link: '/',
                icon: jsx(IoLocationSharp, {}),
            },
            {
                id: 'Recommend Jobs',
                name: 'Recommend Jobs',
                link: '/',
                icon: jsx(BiSolidLike, {}),
            },
        ],
    },
    {
        id: 'companies',
        name: 'Companies',
        link: '/companies',
        icon: jsx(Companies, {}),
    },
    {
        id: 'tools',
        name: 'Tools',
        icon: jsx(Tools, {}),
        subMenu: [
            {
                id: 'Create CV',
                name: 'Create CV',
                link: '/tao-cv-online?src=topdev.vn&medium=mainmenu',
                icon: jsx(CreateCv, {}),
            },
            {
                id: 'Convert CV',
                name: 'Convert CV',
                link: '/tao-cv-online?src=topdev.vn&medium=mainmenu',
                icon: jsx(ConvertCv, {}),
            },
            {
                id: 'Personality Test',
                name: 'Personality Test',
                link: '/page/trac-nghiem-tinh-cach?src=topdev.vn&medium=mainmenu',
                icon: jsx(BsFillEmojiSmileFill, {}),
            },
            {
                id: 'Salary',
                name: 'Salary',
                link: '/tool/tinh-luong-gross-net?src=topdev.vn&medium=mainmenu',
                icon: jsx(Salary, {}),
            },
            {
                id: 'Interview',
                name: 'Interview',
                link: '/interview?src=topdev.vn&medium=mainmenu',
                icon: jsx(Interview, {}),
            },
            {
                id: 'Blog',
                name: 'Blog',
                link: `/blog?src=topdev.vn&medium=mainmenu`,
                icon: jsx(Blog, {}),
            },
        ],
    },
    {
        id: 'account',
        name: 'Account',
        icon: jsx(Account, {}),
        subMenu: [
            {
                id: 'Dashboard',
                name: 'Dashboard',
                link: '/users/profile?src=topdev.vn&medium=submenu',
                icon: jsx(Dashboard, {}),
            },
            {
                id: 'CvManagement',
                name: 'CV Management ',
                link: '/users/my-cv?src=topdev.vn&medium=submenu',
                icon: jsx(CvManagement, {}),
            },
            {
                id: 'AppliedJobs',
                name: 'Applied Jobs',
                link: '/users/jobs-applied?src=topdev.vn&medium=submenu',
                icon: jsx(AppliedJobs, {}),
            },
            {
                id: 'FollowingJobs',
                name: 'Following Jobs',
                link: '/users/jobs-followed?src=topdev.vn&medium=submenu',
                icon: jsx(FollowingJobs, {}),
            },
            {
                id: 'Setting',
                name: 'Account Setting',
                link: '/users/personality-test?src=topdev.vn&medium=submenu',
                icon: jsx(Setting, {}),
            },
            {
                id: 'Logout',
                name: 'Logout',
                link: '/logout',
                icon: jsx(Logout, {}),
            },
        ],
    },
];

// interface HeaderMobileProps {
//   locale?: string;
// }
// const InputSearch = ({ lang = 'vi' }) => {
//   const [isOpenSuggest, setIsOpenSuggest] = useState(false);
//   const [search, setSearch] = useState('');
//   const debouncedSuggest = useDebounce<string>(search, 500);
//   const [suggestData, setSuggestData] = useState<SuggestedType[]>([]);
//   const suggestRef = useRef<HTMLDivElement>(null);
//   const handleClickInputSearch = () => {
//     if (suggestData.length && !isOpenSuggest) {
//       setIsOpenSuggest(true);
//     }
//   };
//   const handleChangeSearch = async (event: ChangeEvent<HTMLInputElement>) => {
//     setSearch(event.target.value);
//   };
//   const handleSuggestedKeywords = async () => {
//     if (search) {
//       try {
//         const response = await getSuggestedKeywords.get(search);
//         setSuggestData(response);
//         setIsOpenSuggest(true);
//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       } catch (err) {
//         throw Error('Can not get suggested keywords!');
//       }
//     } else {
//       setIsOpenSuggest(false);
//       setSuggestData([]);
//     }
//   };
//   const handleClickSuggest = (suggestItem: SuggestedType) => {
//     const locate = lang === 'vie' ? 'it-jobs' : 'viec-lam-it';
//     const formattedUrl = `${locate}/${suggestItem.slug}-kt${suggestItem.id}`;
//     window.location.href = formattedUrl;
//     setIsOpenSuggest(false);
//   };
//   useEffect(() => {
//     document.addEventListener('click', handleClickDocument);
//     return () => {
//       document.removeEventListener('click', handleClickDocument);
//     };
//   }, [isOpenSuggest]);
//   useEffect(() => {
//     handleSuggestedKeywords();
//   }, [debouncedSuggest]);
//   const handleClickDocument = (event: globalThis.MouseEvent) => {
//     if (
//       isOpenSuggest &&
//       suggestRef.current &&
//       !suggestRef.current.contains(event.target as Node)
//     ) {
//       setIsOpenSuggest((prev) => !prev);
//     }
//   };
//   return (
//     <div className={styles.containerSearch}>
//       <input
//         type="text"
//         className={styles.input}
//         placeholder="Search..."
//         onChange={handleChangeSearch}
//         value={search}
//         onClick={handleClickInputSearch}
//       />
//       <button className={styles.button}>
//         <SearchIcon />
//       </button>
//       {isOpenSuggest && suggestData.length > 0 && (
//         <div ref={suggestRef} className={styles.suggestContainer}>
//           <div className={styles.suggestList}>
//             {suggestData.map((suggestItem) => (
//               <button
//                 key={suggestItem.id}
//                 className={styles.suggestItem}
//                 onClick={() => handleClickSuggest(suggestItem)}
//               >
//                 {suggestItem.keyword}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
const InputSearchSticky = ({ isSticky = false, lang = 'vie' }) => {
    const [isOpenSuggest, setIsOpenSuggest] = useState(false);
    const [search, setSearch] = useState('');
    const debouncedSuggest = useDebounce(search, 500);
    const [suggestData, setSuggestData] = useState([]);
    const suggestRef = useRef(null);
    const handleClickInputSearch = () => {
        if (suggestData.length && !isOpenSuggest) {
            setIsOpenSuggest(true);
        }
    };
    const handleChangeSearch = async (event) => {
        setSearch(event.target.value);
    };
    const handleSuggestedKeywords = async () => {
        if (search) {
            try {
                const response = await getSuggestedKeywords.get(search);
                setSuggestData(response);
                setIsOpenSuggest(true);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            }
            catch (err) {
                throw Error('Can not get suggested keywords!');
            }
        }
        else {
            setIsOpenSuggest(false);
            setSuggestData([]);
        }
    };
    const handleClickSuggest = (suggestItem) => {
        const locate = lang === 'vie' ? 'it-jobs' : 'viec-lam-it';
        const formattedUrl = `${locate}/${suggestItem.slug}-kt${suggestItem.id}`;
        window.location.href = formattedUrl;
        setIsOpenSuggest(false);
    };
    useEffect(() => {
        document.addEventListener('click', handleClickDocument);
        return () => {
            document.removeEventListener('click', handleClickDocument);
        };
    }, [isOpenSuggest]);
    useEffect(() => {
        handleSuggestedKeywords();
    }, [debouncedSuggest]);
    const handleClickDocument = (event) => {
        if (isOpenSuggest &&
            suggestRef.current &&
            !suggestRef.current.contains(event.target)) {
            setIsOpenSuggest((prev) => !prev);
        }
    };
    return (jsxs("div", { className: isSticky ? styles$4.containerSearchSticky : styles$4.hiddenSearch, children: [jsx("input", { type: "text", className: styles$4.inputSticky, placeholder: "Search...", onChange: handleChangeSearch, value: search, onClick: handleClickInputSearch }), jsx("button", { className: styles$4.buttonSticky, children: jsx(SearchIcon, {}) }), isOpenSuggest && suggestData.length > 0 && (jsx("div", { ref: suggestRef, className: styles$4.suggestContainer, children: jsx("div", { className: styles$4.suggestList, children: suggestData.map((suggestItem) => (jsx("button", { className: styles$4.suggestItem, onClick: () => handleClickSuggest(suggestItem), children: suggestItem.keyword }, suggestItem.id))) }) }))] }));
};
const HeaderMobile = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const isActive = (path, exact = false) => {
        if (!path)
            return false;
        const currentPath = window.location.pathname;
        const cleanPath = path.split('?')[0];
        return exact
            ? currentPath === cleanPath
            : currentPath === cleanPath || currentPath.startsWith(`${cleanPath}/`);
    };
    const handleMenuClick = (item) => {
        if (!isLogin && item.id === 'account') {
            window.location.href =
                'https://accounts.topdev.vn/' +
                    '/?redirect_uri=' +
                    encodeURIComponent(window.location.href);
        }
        else if (item.subMenu) {
            setActiveSubmenu((prevItem) => (prevItem?.id === item?.id ? null : item));
        }
    };
    useEffect(() => {
        const checkIsLogin = async () => {
            try {
                const isLogin = await checkLogin.get();
                setIsLogin(isLogin);
            }
            catch (err) {
                console.error('Error fetching categories:', err);
            }
        };
        checkIsLogin();
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 80);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const renderMenuItem = (item) => {
        if (item.subMenu) {
            return (jsxs("button", { className: activeSubmenu?.id === item.id
                    ? styles$4.menuItemActive
                    : styles$4.menuItem, onClick: () => handleMenuClick(item), children: [jsx("span", { className: styles$4.menuIcon, children: item.icon }), item.name] }, item.id));
        }
        return (jsxs("a", { href: item.link, className: isActive(item.link ?? null, true)
                ? styles$4.menuItemActive
                : styles$4.menuItem, children: [jsx("span", { className: styles$4.menuIcon, children: item.icon }), item.name] }, item.id));
    };
    const renderSubMenuItem = (subItem) => {
        return (jsxs("a", { href: subItem.link ?? '/', className: isActive(subItem.link ?? '/')
                ? styles$4.subMenuItemActive
                : styles$4.subMenuItem, children: [jsx("span", { className: styles$4.menuIcon, children: subItem.icon }), subItem.name] }, subItem.id));
    };
    const renderDrawer = () => {
        return (jsxs("div", { className: activeSubmenu?.subMenu ? styles$4.drawerOpen : styles$4.drawer, children: [jsx("div", { className: styles$4.wrapperStick, children: jsx("div", { className: styles$4.dragHandle }) }), activeSubmenu?.id === 'account' ? (jsxs("div", { className: styles$4.accountContainer, children: [jsxs("div", { className: styles$4.information, children: [jsx("span", { className: styles$4.hello, children: "Hello," }), jsx("span", { className: styles$4.name, children: "Nguy\u1EC5n Minh Anh" }), jsx("span", { className: styles$4.email, children: "anh.ng@gmailcom" })] }), jsx("div", { className: styles$4.avatar, children: jsx("img", { src: "https://c.topdevvn.com/v4/_next/static/media/no-avatar.6db79731.svg", alt: "" }) })] })) : null, activeSubmenu?.subMenu?.map(renderSubMenuItem)] }));
    };
    return (jsxs(Fragment, { children: [jsxs("header", { className: isSticky ? styles$4.headerMobileSticky : styles$4.headerMobile, children: [jsxs("div", { className: styles$4.containerImage, children: [jsx("a", { href: "/", children: jsx("img", { src: "https://cdn.topdev.vn/v4/assets/images/common/logo-mobile-2.svg", width: 114, height: 20, loading: "lazy", alt: "TopDev", className: isSticky ? styles$4.logoLargeHidden : styles$4.logoLarge }) }), jsx("a", { className: isSticky ? styles$4.logoSmallVisible : styles$4.logoSmall, href: "/", children: jsx("img", { src: "https://c.topdevvn.com/v4/assets/images/common/logo-mobile.svg", width: 24, height: 24, loading: "lazy", alt: "TopDev" }) }), jsx(InputSearchSticky, { isSticky: isSticky })] }), jsxs("div", { className: styles$4.notificationGroup, children: [jsx("button", { className: styles$4.wrapperButton, children: jsx(Notification$1, {}) }), jsx(DrawerMenu, { children: jsx("span", { className: styles$4.wrapperButton, children: jsx(Hamburger, {}) }) })] })] }), jsx("nav", { className: styles$4.menuList, children: MENU_LIST.map(renderMenuItem) }), renderDrawer(), jsx("div", { className: activeSubmenu ? styles$4.backdropOpen : styles$4.backdrop, onClick: () => setActiveSubmenu(null) })] }));
};

export { Header, HeaderMobile };
//# sourceMappingURL=index.js.map
