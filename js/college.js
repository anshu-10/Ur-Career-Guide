const collegeContainer = document.getElementById("collegeContainer");
const careerFilter = document.getElementById("careerFilter");
const locationFilter = document.getElementById("locationFilter");
const searchInput = document.getElementById("searchInput");
const noColleges = document.getElementById("noColleges");

// Load on filter change or typing
careerFilter.addEventListener("change", loadColleges);
locationFilter.addEventListener("change", loadColleges);
searchInput.addEventListener("input", loadColleges);

// Load colleges from Firestore
function loadColleges() {
  collegeContainer.innerHTML = "";
  noColleges.style.display = "none";

  const searchVal = searchInput.value.toLowerCase().trim();
  const careerVal = careerFilter.value.toLowerCase();
  const locationVal = locationFilter.value.toLowerCase();

  firebase.firestore().collection("colleges").get().then(snapshot => {
    let found = false;

    snapshot.forEach(doc => {
      const college = doc.data();
      const id = doc.id;

      const matchesCareer = !careerVal || (college.career?.toLowerCase() === careerVal);
      const matchesLocation = !locationVal || (college.location?.toLowerCase().includes(locationVal));
      const matchesSearch = !searchVal ||
        (college.name?.toLowerCase().includes(searchVal)) ||
        (college.location?.toLowerCase().includes(searchVal));

      if (matchesCareer && matchesLocation && matchesSearch) {
        found = true;
        displayCollegeCard(college, id);
      }
    });

    if (!found) {
      noColleges.style.display = "block";
    }
  }).catch(err => {
    console.error("Error loading colleges:", err);
  });
}

// Display single college card
function displayCollegeCard(college, id) {
  const card = document.createElement("div");
  card.className = "col-md-4 mb-4";
  card.innerHTML = `
    <div class="card college-card p-3">
      <h5>${college.name}</h5>
      <p><strong>Location:</strong> ${college.location}</p>
      <p><strong>Career:</strong> ${college.career}</p>
      <p><strong>Fee:</strong> ${college.fee || "N/A"}</p>
      <div class="card-buttons">
        <a href="college-details.html?id=${id}" class="btn btn-info btn-sm">View Details</a>
        <a href="college-registration.html?id=${id}" class="btn btn-success btn-sm">Apply</a>
        <button class="btn btn-outline-secondary btn-sm" onclick="bookmarkCollege('${id}')">Bookmark</button>
      </div>
    </div>
  `;
  collegeContainer.appendChild(card);
}

// Bookmark college
function bookmarkCollege(collegeId) {
  const user = firebase.auth().currentUser;
  if (!user) {
    alert("Please login to bookmark.");
    return;
  }

  const uid = user.uid;
  firebase.firestore().collection("users").doc(uid)
    .collection("bookmarks").doc(collegeId)
    .set({ bookmarked: true })
    .then(() => {
      alert("College bookmarked!");
    })
    .catch((error) => {
      console.error("Bookmark failed:", error);
      alert("Bookmark failed: " + error.message);
    });
}

// Load colleges after user login
firebase.auth().onAuthStateChanged((user) => {
  if (user) loadColleges();
});
