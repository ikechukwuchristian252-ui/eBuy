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
    name: "Running Shoes",
    price: "$59.99",
    image: require("../assets/images/watch.jpg"),
  },
  {
    id: "4",
    name: "Sunglasses",
    price: "$19.99",
    image: require("../assets/images/iphone.jpg"),
  },
];

const index = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {/* HEADER STARTS HERE */}
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Hello, Christian {"\u{1F44B}"}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "medium", color: "gray" }}>
              What are you shopping today?
            </Text>
          </View>
          <View style={styles.left}>
            <View>
              <Lucide name="bell" color={"#000"} size={30} />
            </View>
            <View>
              <Image
                source={require("../assets/images/img1.jpg")}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  objectFit: "cover",
                }}
              />
            </View>
          </View>
        </View>
        {/* HEADER ENDS HERE */}

        {/* SEARCH INPUT STARTS HERE */}
        <View>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              paddingVertical: 6,
              borderWidth: 1,
              borderColor: "#ddd",
              flexDirection: "row",
              paddingHorizontal: 10,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 8,
              marginTop: 5,
              gap: 5,
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
            gap: 6,
            marginTop: 10,
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
            marginTop: 10,
            borderRadius: 15,
          }}
        >
          <View style={styles.cta}>
            <Text style={{ color: "#fff" }}>LIMITED TIME ONLY</Text>
            <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
              Summer Sale
            </Text>
            <Text style={{ color: "#fff", fontSize: 20 }}>
              Up to <Text style={{ color: "#FFE205" }}>50%</Text> Off
            </Text>
            <Pressable style={styles.shopButton}>
              <Text style={styles.shopButtonText}>Shop Now</Text>
              <Lucide name="arrow-right" color={"#2977F6"} size={16} />
            </Pressable>
          </View>
        </View>
        {/* CTA ENDS HERE */}

        {/* PRODUCTS CARD STARTS HERE */}
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Popular Products
            </Text>
            <Pressable>
              <Text style={{ color: "#3b82f6", fontWeight: "600" }}>
                See All
              </Text>
            </Pressable>
          </View>

          <View style={styles.cardGrid}>
            {products.map((item) => (
              <View key={item.id} style={styles.card}>
                <Image source={item.image} style={styles.cardImage} />
                <Text style={styles.cardTitle} numberOfLines={1}>
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 6,
                  }}
                >
                  <Text style={styles.cardPrice}>{item.price}</Text>
                  <Pressable style={styles.addButton}>
                    <Lucide name="plus" color={"#fff"} size={16} />
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
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  cardImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
    objectFit: "cover",
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
    backgroundColor: "#3b82f6",
    borderRadius: 100,
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
});
