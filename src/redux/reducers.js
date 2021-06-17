export default function reducer(state, action) {
  switch (action.type) {
    case "userData": {
      return { ...state, userData: action.userData };
    }
    case "configList": {
      return { ...state, userData: action.configList };
    }
    case "handleTop": {
      return { ...state, bot_index: action.bot_index };
    }
    case "changeActive": {
      return { ...state, nav_active: action.nav_active };
    }
    default:
      return state;
  }
}
