import Router from "./components/router/index.js"
import AppComponent from "./app/app.js"
// import "./components/index.js"

import FoundationComponent from "./app/foundation/foundation.js"
import ElevationComponent from "./app/elevation/elevation.js"
import LayoutComponent from "./app/layout/layout.js"
// import ColorComponent from "./app/color/color.js"
// import TypographyComponent from "./app/typography/typography.js"
// import IconographyComponent from "./app/iconography/iconography.js"
// import RippleComponent from "./app/ripple/ripple.js"
// import DraggableComponent from "./app/draggable/draggable.js"
// import DroppableComponent from "./app/droppable/droppable.js"
// import ResizableComponent from "./app/resizable/resizable.js"
// import SelectableComponent from "./app/selectable/selectable.js"
// import SortableComponent from "./app/sortable/sortable.js"
// import BottomAppBarComponent from "./app/bottomAppBar/bottomAppBar.js"
// import TopAppBarComponent from "./app/topAppBar/topAppBar.js"
// import BackdropComponent from "./app/backdrop/backdrop.js"
// import BannerComponent from "./app/banner/banner.js"
// import BottomNavigationComponent from "./app/bottomNavigation/bottomNavigation.js"
import ButtonComponent from "./app/button/button.js"
import FabComponent from "./app/fab/fab.js"
import CardComponent from "./app/card/card.js"
import ChipComponent from "./app/chip/chip.js"
import DataTableComponent from "./app/dataTable/dataTable.js"
// import DialogComponent from "./app/dialog/dialog.js"
// import DividerComponent from "./app/divider/divider.js"
// import ImageListComponent from "./app/imageList/imageList.js"
// import ListComponent from "./app/list/list.js"
// import MenuComponent from "./app/menu/menu.js"
// import NavigationDrawerComponent from "./app/navigationDrawer/navigationDrawer.js"
// import PickerComponent from "./app/picker/picker.js"
// import ProgressComponent from "./app/progress/progress.js"
import CheckboxComponent from "./app/checkbox/checkbox.js"
// import RadioComponent from "./app/radio/radio.js"
// import SwitchComponent from "./app/switch/switch.js"
// import BottomSheetComponent from "./app/bottomSheet/bottomSheet.js"
// import SideSheetComponent from "./app/sideSheet/sideSheet.js"
// import SliderComponent from "./app/slider/slider.js"
// import SnackbarComponent from "./app/snackbar/snackbar.js"
// import TabComponent from "./app/tab/tab.js"
// import TextFieldComponent from "./app/textField/textField.js"
// import TooltipComponent from "./app/tooltip/tooltip.js"

new Router([
    { path: "", component: AppComponent, children: [
        { path: "foundation", component: FoundationComponent },
        { path: "elevation", component: ElevationComponent },
        { path: "layout", component: LayoutComponent },
        // { path: "color", component: ColorComponent },
        // { path: "typography", component: TypographyComponent },
        // { path: "iconography", component: IconographyComponent },
        // { path: "ripple", component: RippleComponent },
        // { path: "draggable", component: DraggableComponent },
        // { path: "droppable", component: DroppableComponent },
        // { path: "resizable", component: ResizableComponent },
        // { path: "selectable", component: SelectableComponent },
        // { path: "sortable", component: SortableComponent },
        // { path: "bottom-app-bar", component: BottomAppBarComponent },
        // { path: "top-app-bar", component: TopAppBarComponent },
        // { path: "backdrop", component: BackdropComponent },
        // { path: "banner", component: BannerComponent },
        // { path: "bottom-navigation", component: BottomNavigationComponent },
        { path: "button", component: ButtonComponent },
        { path: "fab", component: FabComponent },
        { path: "card", component: CardComponent },
        { path: "chip", component: ChipComponent },
        { path: "data-table", component: DataTableComponent },
        // { path: "dialog", component: DialogComponent },
        // { path: "divider", component: DividerComponent },
        // { path: "image-list", component: ImageListComponent },
        // { path: "list", component: ListComponent },
        // { path: "menu", component: MenuComponent },
        // { path: "navigation-drawer", component: NavigationDrawerComponent },
        // { path: "picker", component: PickerComponent },
        // { path: "progress", component: ProgressComponent },
        { path: "checkbox", component: CheckboxComponent },
        // { path: "radio", component: RadioComponent },
        // { path: "switch", component: SwitchComponent },
        // { path: "bottom-sheet", component: BottomSheetComponent },
        // { path: "side-sheet", component: SideSheetComponent },
        // { path: "slider", component: SliderComponent },
        // { path: "snackbar", component: SnackbarComponent },
        // { path: "tab", component: TabComponent },
        // { path: "text-field", component: TextFieldComponent },
        // { path: "tooltip", component: TooltipComponent },
    ]}
])