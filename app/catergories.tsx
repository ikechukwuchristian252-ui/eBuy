import Lucide from "@react-native-vector-icons/lucide";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type LucideIconName = React.ComponentProps<typeof Lucide>["name"];

const categories: { label: string; icon: LucideIconName; active?: boolean }[] =
  [
    { label: "Electronics", icon: "smartphone" },
    { label: "Fashion", icon: "shirt" },
    { label: "Shoes", icon: "footprints" },
    { label: "Beauty", icon: "sparkles" },
    { label: "Grocery", icon: "shopping-cart" },
    { label: "Home & Living", icon: "sofa" },
    { label: "Sports", icon: "dumbbell" },
    { label: "Toys & Games", icon: "gamepad-2" },
    { label: "Books", icon: "book-open" },
    { label: "Automotive", icon: "car" },
    { label: "Pet Supplies", icon: "paw-print" },
    { label: "Furniture", icon: "armchair" },
    { label: "Jewelry", icon: "gem" },
    { label: "Health", icon: "heart-pulse" },
    { label: "Baby & Kids", icon: "baby" },
  ];

const catergories = () => {
  return (
    <SafeAreaView
      style={{ gap: 6, paddingHorizontal: 10, paddingVertical: 10 }}
    >
      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#1f2937" }}>
          Catergories
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {categories.map((item) => (
          <View
            key={item.label}
            style={{ flexDirection: "column", paddingBottom: 10 }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#bfbfc4",
                borderRadius: 6,
                paddingHorizontal: 8,
                paddingVertical: 20,
              }}
            >
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Lucide
                  name={item.icon}
                  color={"#3b82f6"}
                  size={30}
                  style={{}}
                />
                <Text style={{ fontSize: 20, fontWeight: "600" }}>
                  {item.label}
                </Text>
              </View>
              <Lucide name="chevron-right" color={"#bfbfc4"} size={20} />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default catergories;
