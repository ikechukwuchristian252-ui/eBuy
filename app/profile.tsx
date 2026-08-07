import Lucide from "@react-native-vector-icons/lucide";
import { LogOut } from "lucide-react-native";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type LucideIconName = React.ComponentProps<typeof Lucide>["name"];

const categories: { label: string; icon: LucideIconName; active?: boolean }[] =
  [
    { label: "Edit Profile", icon: "user" },
    { label: "My Orders", icon: "package" },
    { label: "Wishlist", icon: "heart" },
    { label: "Addresses", icon: "map-pin" },
    { label: "Payment Methods", icon: "credit-card" },
    { label: "Notifications", icon: "bell" },
    { label: "Settings", icon: "settings" },
  ];

const profile = () => {
  return (
    <SafeAreaView style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#dadae0",
          paddingVertical: 20,
        }}
      >
        <Image
          source={require("../assets/images/img1.jpg")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            objectFit: "cover",
          }}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Christian</Text>
        <Text>christian@gmail.com</Text>
      </View>
      <View
        style={{
          paddingVertical: 15,
          borderBottomWidth: 1,
          borderBottomColor: "#dadae0",
        }}
      >
        {categories.map((item) => (
          <View
            key={item.label}
            style={{ flexDirection: "column", paddingVertical: 8 }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Lucide
                  name={item.icon}
                  color={"#999fa8"}
                  size={30}
                  style={{}}
                />
                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                  {item.label}
                </Text>
              </View>
              <Lucide name="chevron-right" color={"#bfbfc4"} size={20} />
            </View>
          </View>
        ))}
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <LogOut color="#F37176" size={18} />
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#F37176" }}>
          Logout
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default profile;
