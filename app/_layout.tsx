import Lucide from "@react-native-vector-icons/lucide";
import { Tabs } from "expo-router";

const RootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarActiveTintColor: "#3b82f6",
          tabBarIcon: ({ focused, color, size }) => (
            <Lucide
              name={focused ? "home" : "home"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="catergories"
        options={{
          tabBarLabel: "Categories",
          headerShown: false,
          tabBarActiveTintColor: "#3b82f6",
          tabBarIcon: ({ focused, color, size }) => (
            <Lucide
              name={focused ? "list" : "list"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarLabel: "Wishlist",
          headerShown: false,
          tabBarActiveTintColor: "#3b82f6",
          tabBarIcon: ({ focused, color, size }) => (
            <Lucide
              name={focused ? "heart" : "heart"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarLabel: "Cart",
          headerShown: false,
          tabBarActiveTintColor: "#3b82f6",
          tabBarIcon: ({ focused, color, size }) => (
            <Lucide
              name={focused ? "shopping-cart" : "shopping-cart"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarActiveTintColor: "#3b82f6",
          tabBarIcon: ({ focused, color, size }) => (
            <Lucide
              name={focused ? "user" : "user"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default RootLayout;
