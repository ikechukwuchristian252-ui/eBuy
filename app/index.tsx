import Lucide from "@react-native-vector-icons/lucide";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type LucideIconName = React.ComponentProps<typeof Lucide>["name"];

const categories: { label: string; icon: LucideIconName; active?: boolean }[] =
  [
    { label: "Electronics", icon: "smartphone", active: true },
    { label: "Fashion", icon: "shirt" },
    { label: "Shoes", icon: "footprints" },
    { label: "Beauty", icon: "sparkles" },
    { label: "Grocery", icon: "shopping-cart" },
  ];

const products = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: "$49.99",
    image: require("../assets/images/headset.jpg"),
  },
  {
    id: "2",
    name: "Smart Watch",
    price: "$89.99",
    image: require("../assets/images/watch.jpg"),
  },
  {
    id: "3",
    name: "Smart Watch",
    price: "$59.99",
    image: require("../assets/images/watch.jpg"),
  },
  {
    id: "4",
    name: "iPhone 13 pro max",
    price: "$19.99",
    image: require("../assets/images/iphone.jpg"),
  },
];

const index = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* HEADER STARTS HERE */}
        <View style={[styles.container, { marginBottom: 20 }]}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Hello, Christian {"\u{1F44B}"}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "medium",
                color: "gray",
                marginTop: 4,
              }}
            >
              What are you shopping today?
            </Text>
          </View>
          <View style={[styles.left, { gap: 12 }]}>
            <View>
              <Lucide name="bell" color={"#000"} size={26} />
              <View style={styles.notificationDot} />
            </View>
            <View>
              <Image
                source={require("../assets/images/img1.jpg")}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 100,
                  objectFit: "cover",
                }}
              />
            </View>
          </View>
        </View>
        {/* HEADER ENDS HERE */}

        {/* SEARCH INPUT STARTS HERE */}
        <View style={{ marginBottom: 20 }}>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              paddingVertical: 5,
              borderWidth: 1,
              borderColor: "#ddd",
              flexDirection: "row",
              paddingHorizontal: 14,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 8,
              gap: 8,
            }}
          >
            <Lucide name="search" color={"#9ca3af"} size={20} />
            <TextInput
              placeholder="Search products, catergories..."
              placeholderTextColor={"#9ca3af"}
              style={{ flex: 1, fontSize: 16, outline: "none" }}
            ></TextInput>
          </View>
        </View>
        {/* SEARCH INPUT ENDS HERE */}

        {/* TABS STARTS HERE */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            gap: 10,
            paddingRight: 20,
            marginBottom: 24,
          }}
        >
          {categories.map((item) => (
            <Pressable
              key={item.label}
              style={[
                styles.tab,
                item.active ? styles.tabActive : styles.tabInactive,
              ]}
            >
              <Lucide
                name={item.icon}
                color={item.active ? "#3b82f6" : "#9ca3af"}
                size={20}
              />
              <Text
                style={item.active ? styles.textActive : styles.textInactive}
              >
                {item.label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        {/* TABS ENDS HERE */}

        {/* CTA STARTS HERE */}
        <View
          style={{
            backgroundColor: "#1F65FB",
            borderRadius: 15,
            marginBottom: 28,
          }}
        >
          <View style={[styles.cta, { gap: 10 }]}>
            <Text style={{ color: "#fff" }}>LIMITED TIME ONLY</Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 26,
                fontWeight: "bold",
                marginTop: 2,
              }}
            >
              Summer Sale
            </Text>
            <Text style={{ color: "#fff", fontSize: 20 }}>
              Up to <Text style={{ color: "#FFE205" }}>50%</Text> Off
            </Text>
            <Pressable style={[styles.shopButton, { marginTop: 6 }]}>
              <Text style={styles.shopButtonText}>Shop Now</Text>
              <Lucide name="arrow-right" color={"#2977F6"} size={16} />
            </Pressable>
          </View>
        </View>
        {/* CTA ENDS HERE */}

        {/* PRODUCTS CARD STARTS HERE */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Featured Products
            </Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
            >
              <Text style={{ color: "#3b82f6", fontWeight: "600" }}>
                View All
              </Text>
              <Lucide name="arrow-right" color={"#2977F6"} size={16} />
            </Pressable>
          </View>

          <View style={styles.cardGrid}>
            {products.map((item) => (
              <View key={item.id} style={styles.card}>
                <Image source={item.image} style={styles.cardImage} />
                <Text
                  style={[styles.cardTitle, { marginTop: 4 }]}
                  numberOfLines={1}
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Text style={styles.cardPrice}>{item.price}</Text>
                  <Pressable style={styles.addButton}>
                    <Lucide name="plus" color={"#3b82f6"} size={16} />
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        </View>
        {/* PRODUCTS CARD ENDS HERE */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "f8fafc",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  left: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  notificationDot: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: "#3b82f6",
    borderWidth: 1.5,
    borderColor: "#f8fafc",
  },
  tab: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    padding: 6,
  },
  tabActive: {
    borderColor: "#3b82f6",
    backgroundColor: "#dbeafe",
  },
  tabInactive: {
    borderColor: "#d1d5db",
    backgroundColor: "transparent",
  },
  textActive: {
    color: "#3b82f6",
  },
  textInactive: {
    color: "#000",
  },
  cta: { padding: 20, borderRadius: 10 },
  shopButton: {
    marginTop: 10,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  shopButtonText: {
    color: "#2977F6",
    fontWeight: "bold",
  },
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  cardImage: {
    width: "100%",
    height: 110,
    borderRadius: 10,
    marginBottom: 10,
    objectFit: "contain",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#3b82f6",
  },
  addButton: {
    backgroundColor: "#E7EFFE",
    borderRadius: 100,
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
});
