import { Plus, Trash2 } from "lucide-react-native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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

const wishlist = () => {
  return (
    <SafeAreaView style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
      {/* WISHLIST HEADER STARTS HERE */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Wishlist</Text>
        <Pressable style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>Edit</Text>
        </Pressable>
      </View>
      {/* WISHLIST HEADER ENDS HERE */}

      {/* PRODUCTS CARD STARTS HERE */}
      <View style={styles.listGrid}>
        {products.map((item) => (
          <View key={item.id} style={styles.rowCard}>
            <Image source={item.image} style={styles.cardImage} />
            <View style={styles.centerDetails}>
              <Text style={styles.cardTitle} numberOfLines={2}>
                {item.name}
              </Text>
              <Text style={styles.cardPrice}>{item.price}</Text>
            </View>
            <View style={styles.rightActions}>
              <Pressable style={styles.deleteButton}>
                <Trash2 color="#3b82f6" size={18} />
              </Pressable>
              <Pressable style={styles.addToCartButton}>
                <Plus color="#558AF1" size={14} />
                <Text style={styles.addToCartText}>Add to Cart</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>
      {/* PRODUCTS CARD ENDS HERE */}
    </SafeAreaView>
  );
};

export default wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1f2937",
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  viewAllText: {
    color: "#3b82f6",
    fontWeight: "600",
  },
  listGrid: {
    gap: 12,
  },
  rowCard: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: "#f3f4f6",
  },
  centerDetails: {
    flex: 1,
    paddingHorizontal: 12,
    justifyContent: "center",
    gap: 4,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#10b981",
  },
  rightActions: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 80,
    paddingVertical: 2,
  },
  deleteButton: {
    padding: 4,
  },
  addToCartButton: {
    flexDirection: "row",
    backgroundColor: "#ECF1FE",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignItems: "center",
    gap: 2,
    borderColor: "#3b82f6",
    borderStyle: "solid",
    borderWidth: 1,
  },
  addToCartText: {
    color: "#558AF1",
    fontSize: 12,
    fontWeight: "600",
  },
});
