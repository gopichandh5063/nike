// Array to store reviews
let reviews = [];

// Submit a review
function submitReview() {
  const name = document.getElementById('customerName').value;
  const feedback = document.getElementById('customerFeedback').value;
  const rating = document.getElementById('rating').value;

  if(name === "" || feedback === "") {
    alert("Please fill in your name and feedback!");
    return;
  }

  const review = {
    name: name,
    feedback: feedback,
    rating: rating
  };

  reviews.push(review);
  displayReviews();

  // Clear input fields
  document.getElementById('customerName').value = "";
  document.getElementById('customerFeedback').value = "";
}

// Display reviews
function displayReviews() {
  const reviewsList = document.getElementById('reviewsList');
  reviewsList.innerHTML = ""; // Clear existing

  reviews.forEach((rev, index) => {
    const div = document.createElement('div');
    div.className = "review-card";
    div.innerHTML = `
      <strong>${rev.name}</strong> - ${"⭐".repeat(rev.rating)}<br>
      ${rev.feedback}
    `;
    reviewsList.appendChild(div);
  });
}

// Clear all reviews
function clearReviews() {
  if(confirm("Are you sure you want to clear all reviews?")) {
    reviews = [];
    displayReviews();
  }
}
