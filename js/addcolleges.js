firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    alert("Please login first.");
    window.location.href = "login.html";
    return;
  }

  // ✅ Attach uploadColleges function to global window so HTML button can call it
  window.uploadColleges = function () {
    const colleges = {
      "C001": {
        name: "Ramdeobaba College of Engineering",
        location: "Nagpur, India",
        career: "Engineering",
        fee: "₹1.2 LPA",
        eligibility: "Min 60% in 12th + JEE Mains",
        facilities: "Hostel, WiFi, Labs, Library",
        placement: "Avg Package: ₹6 LPA, TCS, Infosys",
        scholarship: "Merit-based up to 50% fee waiver",
        rules: "No ragging, formal dress code",
        description: "One of the top engineering colleges in Maharashtra."
      },
      "C002": {
        name: "Indian Institute of Management Ahmedabad",
        location: "Ahmedabad, India",
        career: "Management",
        fee: "₹2.5 LPA",
        eligibility: "Bachelor's with 50% + CAT score",
        facilities: "AC classrooms, Hostels, WiFi",
        placement: "Avg Package: ₹25 LPA, McKinsey, BCG",
        scholarship: "Need-based up to 100%",
        rules: "Mandatory attendance, zero tolerance on cheating",
        description: "Premier institute for business education in Asia."
      },
      "C003": {
        name: "MIT World Peace University",
        location: "Pune, India",
        career: "Engineering",
        fee: "₹1.8 LPA",
        eligibility: "60% in PCM + JEE",
        facilities: "Labs, Sports, Innovation Hub",
        placement: "₹5 LPA avg, IBM, Infosys",
        scholarship: "Merit + Economic Criteria",
        rules: "Formal dress, discipline required",
        description: "Known for innovative engineering and peace education."
      },
      "C004": {
        name: "Harvard Business School",
        location: "Boston, USA",
        career: "Management",
        fee: "$75,000/year",
        eligibility: "Bachelor's + GMAT",
        facilities: "World-class infrastructure",
        placement: "Avg $150,000 salary",
        scholarship: "Merit/Need based",
        rules: "Strict honor code",
        description: "World's top business school with global alumni."
      },
      "C005": {
        name: "Delhi Technological University",
        location: "Delhi, India",
        career: "Engineering",
        fee: "₹1.6 LPA",
        eligibility: "JEE Main + 12th PCM",
        facilities: "WiFi, Labs, Library",
        placement: "₹10 LPA avg, Microsoft, Google",
        scholarship: "Govt & Private schemes",
        rules: "No mobile in class",
        description: "Top technical institute with excellent placement record."
      },
      "C006": {
        name: "Nanyang Business School",
        location: "Singapore",
        career: "Management",
        fee: "$30,000/year",
        eligibility: "Bachelor's + GMAT + TOEFL",
        facilities: "Global exposure, Internships",
        placement: "Top firms in Asia",
        scholarship: "Merit-based",
        rules: "International discipline",
        description: "Top Asian B-school with global connections."
      },
      "C007": {
        name: "BITS Pilani",
        location: "Pilani, India",
        career: "Engineering",
        fee: "₹2.3 LPA",
        eligibility: "BITSAT + 12th",
        facilities: "24x7 Labs, Research support",
        placement: "₹14 LPA avg, Adobe, DE Shaw",
        scholarship: "Top 1% get full waiver",
        rules: "Attendance optional, project-focused",
        description: "Private tech institute with elite alumni."
      },
      "C008": {
        name: "Stanford University",
        location: "California, USA",
        career: "Engineering",
        fee: "$60,000/year",
        eligibility: "SAT/ACT + TOEFL",
        facilities: "Best tech labs, innovation centers",
        placement: "Silicon Valley startups",
        scholarship: "Full/partial based on need",
        rules: "Code of conduct + innovation-focused",
        description: "Top-tier engineering college with cutting-edge research."
      },
      "C009": {
        name: "SP Jain School of Global Management",
        location: "Dubai, Singapore, Sydney",
        career: "Management",
        fee: "$40,000 total",
        eligibility: "Bachelor’s + Entrance Test",
        facilities: "Global campuses",
        placement: "₹20 LPA avg international offers",
        scholarship: "Merit + Diversity Scholarships",
        rules: "Professional code of ethics",
        description: "Multi-campus global business school."
      },
      "C010": {
        name: "VIT Vellore",
        location: "Vellore, India",
        career: "Engineering",
        fee: "₹1.9 LPA",
        eligibility: "VITEEE + 12th",
        facilities: "Hostels, 5G Labs, Sports Arena",
        placement: "₹8 LPA avg, Amazon, Wipro",
        scholarship: "Rank-based waiver",
        rules: "ID mandatory, dress code enforced",
        description: "Popular private tech university with national ranking."
      }
    };

    const db = firebase.firestore();
    const status = document.getElementById("status");
    status.textContent = "Uploading...";

    const batch = db.batch();

    Object.entries(colleges).forEach(([id, data]) => {
      const docRef = db.collection("colleges").doc(id);
      batch.set(docRef, data);
    });

    batch.commit()
      .then(() => {
        console.log("✅ All colleges uploaded!");
        status.textContent = "✅ Colleges uploaded successfully!";
      })
      .catch((err) => {
        console.error("❌ Upload failed:", err);
        status.textContent = "❌ Upload failed: " + err.message;
      });
  };
});


