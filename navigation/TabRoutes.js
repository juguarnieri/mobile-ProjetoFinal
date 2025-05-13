import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Search from "../pages/Search";
import LiveTv from "../pages/LiveTv";
import Account from "../pages/Account";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: ({ color, size}) => (
                    <Icon name="home" color={color} size={size} />
                ),
            }} 
        />
              <Tab.Screen 
            name="Search"
            component={Search}
            options={{
                tabBarIcon: ({ color, size}) => (
                    <Icon name="search" color={color} size={size} />
                ),
            }} 
        />
              <Tab.Screen 
            name="LiveTv" 
            component={LiveTv}
            options={{
                tabBarIcon: ({ color, size}) => (
                    <Icon name="livetv" color={color} size={size} />
                ),
            }} 
        />
              <Tab.Screen 
            name="Account" 
            component={Account}
            options={{
                tabBarIcon: ({ color, size}) => (
                    <Icon name="account" color={color} size={size} />
                ),
            }} 
        />

        </Tab.Navigator>
    );
}