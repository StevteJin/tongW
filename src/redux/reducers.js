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
    case "mp_light": {
      return { ...state, map3d_light: action.map3d_light };
    }
    default:
      return state;
  }
}
