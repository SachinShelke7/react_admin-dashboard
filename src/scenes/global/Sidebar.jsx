import { useState } from "react";
import {
  ProSidebarProvider,
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import {
  HomeOutlined,
  PeopleOutlined,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutlined,
  CalendarTodayOutlined,
  HelpOutlineOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  MenuOutlined,
  MapOutlined,
} from "@mui/icons-material";
import { padding } from "@mui/system";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Link to={to}>
      <MenuItem
        active={selected === title}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <ProSidebarProvider>
      <Box
        sx={{
          "& .sidebar-inner": {
            minHeight: "100vh",
            background: `${colors.primary[400]} !important`,
          },
          "& .menu-anchor": {
            backgroundColor: "transparent !important",
          },
          "& .inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .menu-anchor:hover": {
            color: "#868dfb !important",
          },
          "& .menu-item": {
            color: `${colors.grey[100]}`,
          },
          "& .menu-item.active": {
            color: "#6870fa !important",
          },
        }}
      >
        <ProSidebar collapsed={isCollapsed}>
          <Menu>
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlined /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMINS
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlined />
                  </IconButton>
                </Box>
              )}
            </MenuItem>
            {!isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src="/images/profile.jpg"
                    style={{
                      cursor: "pointer",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0 " }}
                  >
                    Sachin
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    Super Admin
                  </Typography>
                </Box>
              </Box>
            )}
            {/* Menu Items */}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Data
              </Typography>
              <Item
                title="Manage Team"
                to="/team"
                icon={<PeopleOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Contacts Information"
                to="/contacts"
                icon={<ContactsOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Invoices Balance"
                to="/invoices"
                icon={<ReceiptOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Pages
              </Typography>
              <Item
                title="Profile Form"
                to="/form"
                icon={<PersonOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Calender"
                to="/calender"
                icon={<CalendarTodayOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="FAQ"
                to="/faq"
                icon={<HelpOutlineOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Charts
              </Typography>
              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Geo Chart"
                to="/geo"
                icon={<MapOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </ProSidebar>
      </Box>
    </ProSidebarProvider>
  );
};

export default Sidebar;
