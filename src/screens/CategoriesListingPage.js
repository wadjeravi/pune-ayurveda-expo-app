import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image ,FlatList  } from 'react-native';
import img1 from '../../assets/Images/vitaminB12.jpg';
import img2 from '../../assets/Images/herbalance.jpg';
import img3 from '../../assets/Images/greenTea.jpg';
import img4 from '../../assets/Images/vitaminB12.jpg';
import CategoriesListingPageCard from '../cards/CategoriesListingPageCard';


const staticImages = [
  { id: '1', uri: img1, originalPrice: '$100', discountPrice: '$50', name: 'VitaminB12', qty: '30 capsules', discount: "50% Off", description:"Himalayan Organics brings to you Plant-based Vitamin B12 to support various roles in your body. A blend of plant-based extracts like Stevia Leaves, Alfalfa Leaves, Moringa, Wheat Grass, Green Amla & Beetroot, these capsules fulfill the daily dose of Vitamin B12 in your body. Your body needs Vitamin B12 for normal functioning of nerve cells, red blood cell formulation, boosting energy, DNA synthesis, and improving memory. Experience healthy days by incorporating these capsules into your daily life! Green Superfood with 5X power!" },
  { id: '2', uri: img2, originalPrice: '$200', discountPrice: '$100', name: 'Herbalance', qty: '50g', discount: "50% Off", description:"OZiva Plant Based HerBalance for PCOS are Certified Clean and Vegan PCOS supplements of 8 potent Herbal extracts, 6, potent herbs, Inositol and chromium, and 2 digestive enzymes to assist hormonal balance and support regular menstrual cycle in women. These PCOS supplements balance testosterone and estrogen levels, with only the help of 100% natural plant-based whole foods like Chasteberry & Ashoka. These PCOS supplements can reduce PCOS symptoms, menstrual cramps, and hormonal imbalances if combined with a clean, holistic lifestyle, and exercise with the help of Pomegranate, Fennel, Chasteberry & Ashoka. A revitalising tonic for the female reproductive system that improves fertility with Ayurvedic herb Shatavari. These clean, plant-based PCOS supplements promote better digestion and reduce bloating with digestive enzymes. Skin health is a huge insecurity when it comes to PCOS. That’s why these PCOS Supplements support skin cleansing and help control acne and irregular facial hair with herbal extracts such as Chasteberry & Aloe Vera. They are Certified Clean by US CLP & Certified Vegan by Vegan Society of UK, these PCOS supplements are of the highest quality and purity. These PCOS supplements are gluten-free, soy-free, non-GMO, no artificial sweeteners" },
  { id: '3', uri: img3, originalPrice: '$300', discountPrice: '$150', name: 'GreenTea', qty: '80g', discount: "50% Off", description:"It's not just a cup of tea, its therapy - One Sip at a Time. Lipton Green Tea is not just a regular cup of chai, we believe it's therapy for your body. Wake up to a morning cup of hot Lipton green tea and feel how it leaves you feeling light and active. Awaken your senses - one sip at a time. Lipton Green Tea Bags in Honey Lemon Flavor have this goodness. Choose Lipton Green Tea Honey Lemon as your go-to beverage during the day. Buy Now! Magic of Green Tea Green tea is produced when freshly plucked leaves are heated, rolled/cut and then dried. The catechins in the fresh leaves are preserved during the green tea process, making green tea rich in catechins. Also, green tea is typically drunk without milk and sugar and hence gives zero calories as compared to the ordinary chai made with milk and sugar. Available in a Range of Flavors Lipton offers a range of different flavours to ensure that you are offered variety and enjoyment while drinking tea. Lipton flavours some of its teas with added natural flavours and no artificial flavours are used. You may try Lipton Green tea in Pure & Light (unflavored), Tulsi Natura, Honey & Lemon and Lemon Zest flavors as well, available in pack sizes of 10s and 25s Tea bags. Next best to Water Brewed, Unsweetened Lipton Green Tea being 99.5% water is a great way to meet your daily required fluid intake. Staying hydrated is essential to ensure bodily functions are carried out efficiently" },
  { id: '4', uri: img4, originalPrice: '$400', discountPrice: '$200', name: 'VitaminB12', qty: '30 capsules', discount: "50% Off", description:"Himalayan Organics brings to you Plant-based Vitamin B12 to support various roles in your body. A blend of plant-based extracts like Stevia Leaves, Alfalfa Leaves, Moringa, Wheat Grass, Green Amla & Beetroot, these capsules fulfill the daily dose of Vitamin B12 in your body. Your body needs Vitamin B12 for normal functioning of nerve cells, red blood cell formulation, boosting energy, DNA synthesis, and improving memory. Experience healthy days by incorporating these capsules into your daily life! Green Superfood with 5X power!" },
  { id: '5', uri: img1, originalPrice: '$100', discountPrice: '$50', name: 'VitaminB12', qty: '30 capsules', discount: "50% Off", description:"Himalayan Organics brings to you Plant-based Vitamin B12 to support various roles in your body. A blend of plant-based extracts like Stevia Leaves, Alfalfa Leaves, Moringa, Wheat Grass, Green Amla & Beetroot, these capsules fulfill the daily dose of Vitamin B12 in your body. Your body needs Vitamin B12 for normal functioning of nerve cells, red blood cell formulation, boosting energy, DNA synthesis, and improving memory. Experience healthy days by incorporating these capsules into your daily life! Green Superfood with 5X power!" },
  { id: '6', uri: img2, originalPrice: '$200', discountPrice: '$100', name: 'Herbalance', qty: '50g', discount: "50% Off", description:"OZiva Plant Based HerBalance for PCOS are Certified Clean and Vegan PCOS supplements of 8 potent Herbal extracts, 6, potent herbs, Inositol and chromium, and 2 digestive enzymes to assist hormonal balance and support regular menstrual cycle in women. These PCOS supplements balance testosterone and estrogen levels, with only the help of 100% natural plant-based whole foods like Chasteberry & Ashoka. These PCOS supplements can reduce PCOS symptoms, menstrual cramps, and hormonal imbalances if combined with a clean, holistic lifestyle, and exercise with the help of Pomegranate, Fennel, Chasteberry & Ashoka. A revitalising tonic for the female reproductive system that improves fertility with Ayurvedic herb Shatavari. These clean, plant-based PCOS supplements promote better digestion and reduce bloating with digestive enzymes. Skin health is a huge insecurity when it comes to PCOS. That’s why these PCOS Supplements support skin cleansing and help control acne and irregular facial hair with herbal extracts such as Chasteberry & Aloe Vera. They are Certified Clean by US CLP & Certified Vegan by Vegan Society of UK, these PCOS supplements are of the highest quality and purity. These PCOS supplements are gluten-free, soy-free, non-GMO, no artificial sweeteners" },
  { id: '7', uri: img3, originalPrice: '$300', discountPrice: '$150', name: 'GreenTea', qty: '80g', discount: "50% Off", description:"It's not just a cup of tea, its therapy - One Sip at a Time. Lipton Green Tea is not just a regular cup of chai, we believe it's therapy for your body. Wake up to a morning cup of hot Lipton green tea and feel how it leaves you feeling light and active. Awaken your senses - one sip at a time. Lipton Green Tea Bags in Honey Lemon Flavor have this goodness. Choose Lipton Green Tea Honey Lemon as your go-to beverage during the day. Buy Now! Magic of Green Tea Green tea is produced when freshly plucked leaves are heated, rolled/cut and then dried. The catechins in the fresh leaves are preserved during the green tea process, making green tea rich in catechins. Also, green tea is typically drunk without milk and sugar and hence gives zero calories as compared to the ordinary chai made with milk and sugar. Available in a Range of Flavors Lipton offers a range of different flavours to ensure that you are offered variety and enjoyment while drinking tea. Lipton flavours some of its teas with added natural flavours and no artificial flavours are used. You may try Lipton Green tea in Pure & Light (unflavored), Tulsi Natura, Honey & Lemon and Lemon Zest flavors as well, available in pack sizes of 10s and 25s Tea bags. Next best to Water Brewed, Unsweetened Lipton Green Tea being 99.5% water is a great way to meet your daily required fluid intake. Staying hydrated is essential to ensure bodily functions are carried out efficiently" },
  { id: '8', uri: img4, originalPrice: '$400', discountPrice: '$200', name: 'VitaminB12', qty: '30 capsules', discount: "50% Off", description:"Himalayan Organics brings to you Plant-based Vitamin B12 to support various roles in your body. A blend of plant-based extracts like Stevia Leaves, Alfalfa Leaves, Moringa, Wheat Grass, Green Amla & Beetroot, these capsules fulfill the daily dose of Vitamin B12 in your body. Your body needs Vitamin B12 for normal functioning of nerve cells, red blood cell formulation, boosting energy, DNA synthesis, and improving memory. Experience healthy days by incorporating these capsules into your daily life! Green Superfood with 5X power!" },
  { id: '9', uri: img1, originalPrice: '$100', discountPrice: '$50', name: 'VitaminB12', qty: '30 capsules', discount: "50% Off", description:"Himalayan Organics brings to you Plant-based Vitamin B12 to support various roles in your body. A blend of plant-based extracts like Stevia Leaves, Alfalfa Leaves, Moringa, Wheat Grass, Green Amla & Beetroot, these capsules fulfill the daily dose of Vitamin B12 in your body. Your body needs Vitamin B12 for normal functioning of nerve cells, red blood cell formulation, boosting energy, DNA synthesis, and improving memory. Experience healthy days by incorporating these capsules into your daily life! Green Superfood with 5X power!" },
  { id: '10', uri: img2, originalPrice: '$200', discountPrice: '$100', name: 'Herbalance', qty: '50g', discount: "50% Off", description:"OZiva Plant Based HerBalance for PCOS are Certified Clean and Vegan PCOS supplements of 8 potent Herbal extracts, 6, potent herbs, Inositol and chromium, and 2 digestive enzymes to assist hormonal balance and support regular menstrual cycle in women. These PCOS supplements balance testosterone and estrogen levels, with only the help of 100% natural plant-based whole foods like Chasteberry & Ashoka. These PCOS supplements can reduce PCOS symptoms, menstrual cramps, and hormonal imbalances if combined with a clean, holistic lifestyle, and exercise with the help of Pomegranate, Fennel, Chasteberry & Ashoka. A revitalising tonic for the female reproductive system that improves fertility with Ayurvedic herb Shatavari. These clean, plant-based PCOS supplements promote better digestion and reduce bloating with digestive enzymes. Skin health is a huge insecurity when it comes to PCOS. That’s why these PCOS Supplements support skin cleansing and help control acne and irregular facial hair with herbal extracts such as Chasteberry & Aloe Vera. They are Certified Clean by US CLP & Certified Vegan by Vegan Society of UK, these PCOS supplements are of the highest quality and purity. These PCOS supplements are gluten-free, soy-free, non-GMO, no artificial sweeteners" },
  { id: '11', uri: img3, originalPrice: '$300', discountPrice: '$150', name: 'GreenTea', qty: '80g', discount: "50% Off", description:"It's not just a cup of tea, its therapy - One Sip at a Time. Lipton Green Tea is not just a regular cup of chai, we believe it's therapy for your body. Wake up to a morning cup of hot Lipton green tea and feel how it leaves you feeling light and active. Awaken your senses - one sip at a time. Lipton Green Tea Bags in Honey Lemon Flavor have this goodness. Choose Lipton Green Tea Honey Lemon as your go-to beverage during the day. Buy Now! Magic of Green Tea Green tea is produced when freshly plucked leaves are heated, rolled/cut and then dried. The catechins in the fresh leaves are preserved during the green tea process, making green tea rich in catechins. Also, green tea is typically drunk without milk and sugar and hence gives zero calories as compared to the ordinary chai made with milk and sugar. Available in a Range of Flavors Lipton offers a range of different flavours to ensure that you are offered variety and enjoyment while drinking tea. Lipton flavours some of its teas with added natural flavours and no artificial flavours are used. You may try Lipton Green tea in Pure & Light (unflavored), Tulsi Natura, Honey & Lemon and Lemon Zest flavors as well, available in pack sizes of 10s and 25s Tea bags. Next best to Water Brewed, Unsweetened Lipton Green Tea being 99.5% water is a great way to meet your daily required fluid intake. Staying hydrated is essential to ensure bodily functions are carried out efficiently" },
  { id: '12', uri: img4, originalPrice: '$400', discountPrice: '$200', name: 'VitaminB12', qty: '30 capsules', discount: "50% Off", description:"Himalayan Organics brings to you Plant-based Vitamin B12 to support various roles in your body. A blend of plant-based extracts like Stevia Leaves, Alfalfa Leaves, Moringa, Wheat Grass, Green Amla & Beetroot, these capsules fulfill the daily dose of Vitamin B12 in your body. Your body needs Vitamin B12 for normal functioning of nerve cells, red blood cell formulation, boosting energy, DNA synthesis, and improving memory. Experience healthy days by incorporating these capsules into your daily life! Green Superfood with 5X power!" },
];

const CategoriesListingPage = ({route }) => {
  const { myCart, setMyCart, navigation } = route.params || {};

  console.log("myCart in CategoriesListingPage:", myCart);
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {staticImages.map((item) => (
          <TouchableOpacity key={item.id} style={styles.imageContainer}>
            <Image source={item.uri} style={styles.image} />
            <View style={{ marginTop: 10 }}></View>
            <Text style={styles.imageName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      </View>
      
      <View style={styles.rightSide}>
        {/* 2x2 Grid on the right side */}
        <FlatList
        data={staticImages}
        renderItem={({ item }) => (
          <CategoriesListingPageCard
            item={item}
            myCart={myCart}
            setMyCart={setMyCart}
            navigation={navigation}
          />
        )}
        keyExtractor={item => item?.id}
        numColumns={2}
        contentContainerStyle={{ columnGap: 8 }}
        showsVerticalScrollIndicator={false}
      />
      </View>
    </View>
  );
}

export default CategoriesListingPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftSide: {
    flex: 2,
    backgroundColor: 'white',
    padding: 5,
  },
  rightSide: {
    flex: 8,
    backgroundColor: '#e0e0e0',
    padding: 5,
  },
  scrollView: {
    flex: 1, // Make the ScrollView take up the full height of the left side
  },
  image: {
    marginLeft:5,
    width: "100%", // Adjust the width as needed
    height: 80, // Adjust the height as needed
    },
  imageContainer: {
    margin: 5,
    alignItems:'center'
  },
  imageName: {
    marginLeft:2,
    fontSize: 12, // Adjust the font size as needed
    marginTop: 5, // Adjust the margin top as needed
  },
});