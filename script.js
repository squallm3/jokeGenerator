const jokes = [
    "1. What do kids play when their mom is using the phone? Bored games.",
    "2. What do you call an ant who fights crime? A vigilANTe!",
    "3. Why are snails slow? Because they’re carrying a house on their back.",
    "4. What’s the smartest insect? A spelling bee!",
    "5. What does a storm cloud wear under his raincoat? Thunderwear.",
    "6. What is fast, loud and crunchy? A rocket chip.",
    "7. How does the ocean say hi? It waves!",
    "8. What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.",
    "9. Why did the teddy bear say no to dessert? Because she was stuffed.",
    "10. Why did the soccer player take so long to eat dinner? Because he thought he couldn’t use his hands.",
    "11. Name the kind of tree you can hold in your hand? A palm tree!",
    "12. What do birds give out on Halloween? Tweets.",
    "13. What has ears but cannot hear? A cornfield.",
    "14. What’s a cat’s favorite dessert? A bowl full of mice-cream.",
    "15. Where did the music teacher leave her keys? In the piano!",
    "16. What did the policeman say to his hungry stomach? “Freeze. You’re under a vest.”",
    "17. What did the left eye say to the right eye? Between us, something smells!",
    "18. What do you call a guy who’s really loud? Mike.",
    "19. Why do birds fly south in the winter? It’s faster than walking!",
    "20. What did the lava say to his girlfriend? “I lava you!”",
    "21. Why did the student eat his homework? Because the teacher told him it was a piece of cake.",
    "22. What did Yoda say when he saw himself in 4k? HDMI.",
    "23. Which superhero hits home runs? Batman!",
    "24. What’s Thanos’ favorite app on his phone? Snapchat.",
    "25. Sandy’s mum has four kids; North, West, East. What is the name of the fourth child? Sandy, obviously!",
    "26. What is a room with no walls? A mushroom.",
    "27. Why did the blue jay get in trouble at school? For tweeting on a test!",
    "28. What social event do spiders love to attend? Webbings.",
    "29. What did one pickle say to the other? Dill with it.",
    "30. What is brown, hairy and wears sunglasses? A coconut on vacation."];

let randomMessage = () => jokes[Math.floor(Math.random() * 30)];


let x = 0;
do {
    console.log(randomMessage());
    x++;
}
while (x < 3);
