import { Minus, Plus, Trash2 } from "lucide-react-native";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CartItems = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: "$49.99",
    quantity: 1,
    order: 2,
    image: require("../assets/images/headset.jpg"),
  },
  {
    id: "2",
    name: "Smart Watch",
    price: "$89.99",
    quantity: 2,
    order: 5,
    image: require("../assets/images/watch.jpg"),
  },
  {
    id: "3",
    name: "Smart Watch",
    price: "$59.99",
    quantity: 1,
    order: 1,
    image: require("../assets/images/watch.jpg"),
  },
  {
    id: "4",
    name: "iPhone 13 pro max",
    price: "$19.99",
    quantity: 1,
    order: 2,
    image: require("../assets/images/iphone.jpg"),
  },
];

const cart = () => {
  return (
    <SafeAreaView style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
      {/* WISHLIST HEADER STARTS HERE */}
      <View style={{ alignItems: "center", paddingVertical: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "700" }}>Shopping Cart</Text>
      </View>
      {/* WISHLIST HEADER ENDS HERE */}

      {/* PRODUCTS CARD STARTS HERE */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* CART ITEMS STARTS HERE */}
        <View style={{ gap: 10, paddingBottom: 20 }}>
          {CartItems.map((item) => (
            <View key={item.id} style={style.cardItems}>
              <Image source={item.image} style={style.cardImage} />
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 12,
                  justifyContent: "center",
                  gap: 4,
                }}
              >
                <Text numberOfLines={2} style={style.cardTitle}>
                  {item.name}
                </Text>
                <Text style={style.cardPrice}>{item.price}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 6,
                    paddingTop: 5,
                    alignItems: "center",
                  }}
                >
                  <Minus color="#b9bcc5" size={14} />
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#2a2929",
                      fontWeight: "600",
                    }}
                  >
                    {item.order}
                  </Text>
                  <Plus color="#b9bcc5" size={14} />
                </View>
              </View>
              <View
                style={{
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  height: 80,
                  paddingVertical: 2,
                }}
              >
                <Pressable>
                  <Trash2 color="#3b82f6" size={18} />
                </Pressable>
                <Pressable>
                  <Text style={{ color: "gray", fontWeight: "500" }}>
                    {item.price}
                  </Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>
        {/* CART ITEMS ENDS HERE */}

        {/* TOTAL PRICE STARTS HERE */}
        <View style={style.totalCard}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "500", color: "gray" }}>
              Subtotal
            </Text>
            <Text style={{ color: "gray", fontWeight: "500", fontSize: 15 }}>
              $2,060
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "500", color: "gray" }}>
              Delivery Fee
            </Text>
            <Text style={{ color: "gray", fontWeight: "500", fontSize: 15 }}>
              $20
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 15,
              borderTopWidth: 1,
              borderTopColor: "#dadae0",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "500", color: "#000" }}>
              Total
            </Text>
            <Text style={{ color: "#000", fontSize: 20, fontWeight: "700" }}>
              $2,080
            </Text>
          </View>
          <View style={{ flexDirection: "column", gap: 20 }}>
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
              <Text style={{ color: "gray", fontSize: 16 }}>
                Have a coupon code?
              </Text>
              <Text
                style={{ color: "#3b82f6", fontSize: 16, fontWeight: "medium" }}
              >
                Apply
              </Text>
            </View>
            <Pressable
              style={{
                paddingHorizontal: 20,
                backgroundColor: "#3b82f6",
                paddingVertical: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                Checkout
              </Text>
            </Pressable>
          </View>
        </View>
        {/* TOTAL PRICE ENDS HERE */}
      </ScrollView>
      {/* PRODUCTS CARD ENDS HERE */}
    </SafeAreaView>
  );
};

export default cart;

const style = StyleSheet.create({
  cardItems: {
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
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#3b82f6",
  },
  totalCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 12,
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});
