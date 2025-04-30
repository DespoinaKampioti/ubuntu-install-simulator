// script.js
const steps = [
  {
    instruction: "Βήμα 1: Κατεβάζουμε την τελευταία έκδοση Ubuntu Desktop από την επίσημη ιστοσελίδα.",
    content: `
      <div>
        <h2>Downloading Ubuntu 24.04 LTS...</h2>
        <div class="progress-bar">
          <div class="progress-bar-inner" id="download-bar"></div>
        </div>
      </div>
    `,
    onload: () => {
      const bar = document.getElementById("download-bar");
      let progress = 0;
      const interval = setInterval(() => {
        if (progress >= 100) return clearInterval(interval);
        progress += 2;
        bar.style.width = progress + "%";
      }, 50);
    }
  },
  {
    instruction: "Βήμα 2: Τοποθετούμε το USB stick στον υπολογιστή.",
    content: `
      <div style="text-align: center;">
        <img src="usb.jpg" width="600" />
      </div>
    `
  },
  {
    instruction: "Βήμα 3: Ρύθμιζουμε το USB στο λογισμικό Rufus. Στο Scheme διαλέγουμε την επιλογή MBR. Στο System διαλέγουμε την επιλογή FAT32. Στο Cluster Size διαλέγουμε την επιλογή 4096 bytes. ",
    content: `
      <div class="ubuntu-window">
        <h3>Rufus Settings</h3>
        <label>Device:
          <select>
            <option>USB Device</option>
          </select>
        <label>Boot selection:
          <select>
            <option>ubuntu_24.04_desktop.iso</option>
          </select>
        <label>Partition Scheme:
          <select>
            <option>MBR</option>
            <option>GPT</option>
          </select>
        </label><br>
        <label>File System:
          <select>
            <option>FAT32 (Default)</option>
            <option>NTFS</option>
          </select>
        </label><br>
        <label>Cluster Size:
          <select>
            <option>4096 bytes (Default)</option>
            <option>8192 bytes</option>
          </select>
        </label><br><br>
      </div>
    `
  },
  {
    instruction: "Βήμα 4: Κάνουμε boot του υπολογιστή μέσω USB από το BIOS.",
    content: `
      <div class="bios-menu styled-bios">
        <pre>
Boot mode is set to: LEGACY; Secure Boot: OFF

LEGACY BOOT:
  Internal HDD
> USB Storage Device
  Onboard NIC
  System Device Bay

UEFI BOOT:
  *Windows Boot Manager

OTHER OPTIONS:
  BIOS Setup
  *Device Configuration
  Diagnostics
  Intel(R) Management Engine BIOS Extension (MEBx)
  *Change Boot Mode Settings
        </pre>
        <button class="usb-button" onclick="goToNext()">Boot από USB</button>
      </div>
    `
  },
  {
    instruction: "Βήμα 5: GRUB Menu - επιλέγουμε Try or Install Ubuntu (Δοκίμασε ή Κατέβασε Ubuntu).",
    content: `
      <div class="bios-menu styled-bios">
        <p>&gt; Try or Install Ubuntu</p>
        <p>  Ubuntu (safe graphics)</p>
        <p>  OEM install (for manufacturers)</p>
        <p>  Test memory</p>
        <br>
        <button class="usb-button" onclick="goToNext()">Try or Install Ubuntu</button>
      </div>
    `
  },
  {
    instruction: "Βήμα 6: Διαλέγουμε Ελληνικά.",
    content: `
      <div class="ubuntu-background">
        <div class="ubuntu-window">
          <h3>Επιλογή γλώσσας:</h3>
          <label><input type="radio" name="lang"> English</label><br>
          <label><input type="radio" name="lang"> Ελληνικά</label><br><br>
        </div>
      </div>
    `
  },
  {
    instruction: "Βήμα 7: Διαλέγουμε Greek-Ελληνικά.",
    content: `
      <div class="ubuntu-background">
        <div class="ubuntu-window">
          <h3>Επιλογή διάταξης πληκτρολογίου. </h3>
          <label><input type="radio" name="kb"> English (US)</label><br>
          <label><input type="radio" name="kb"> Greek</label><br><br>
        </div>
      </div>
    `
  },
  {
    instruction: "Βήμα 8: Διαλέγουμε Μη συνδεθείς. Μπορούμε να κάνουμε τη σύνδεση αργότερα.",
    content: `
      <div class="ubuntu-background">
        <div class="ubuntu-window">
          <h3>Σύνδεση στο διαδίκτυο:</h3>
          <label><input type="radio" name="net"> Μη συνδεθείς</label><br>
          <label><input type="radio" name="net"> Συνδέσου στο Wi-Fi</label><br><br>
        </div>
      </div>
    `
  },
  {
    instruction: "Βήμα 9: Διαλέγουμε Εγκατάσταση Ubuntu",
    content: `
      <div class="ubuntu-background">
        <div class="ubuntu-window">
          <h3>Τι θα θέλατε να κάνετε;</h3>
          <label><input type="radio" name="install"> Εγκατάσταση Ubuntu</label><br>
          <label><input type="radio" name="install"> Δοκιμή Ubuntu</label><br><br>
        </div>
      </div>
    `
  },
  {
    instruction: "Βήμα 10: Διαλέγουμε Διαδραστική (Interactive), έτσι θα μας καθοδηγήσει βήμα βήμα. Η άλλη επιλογή είναι για έμπειρους χρήστες.",
    content: `
      <div class="ubuntu-background">
        <div class="ubuntu-window">
          <h3>Τύπος εγκατάστασης:</h3>
          <label><input type="radio" name="in"> Διαδραστική (Interactive)</label><br>
          <label><input type="radio" name="in"> Αυτόματη (Automated)</label><br><br>
        </div>
      </div>
    `
  },
  {
    instruction: "Βήμα 11: Διαλέγουμε Προεπιλεγμένες (Default).",
    content: `
      <div class="ubuntu-background">
        <div class="ubuntu-window">
          <h3>Ποιες εφαρμογές θα θέλατε να εγκαταστήσετε;</h3>
          <label><input type="radio" name="app"> Προεπιλεγμένες (Default)</label><br>
          <label><input type="radio" name="app"> Extended selection</label><br><br>
        </div>
      </div>
    `
  },
  {
    instruction: "Βήμα 12: Πρόσθετο λογισμικό. Κάνουμε τικ και στα δύο.",
    content: `
      <div class="ubuntu-background">
        <div class="ubuntu-window">
          <h3>Θα θέλατε να κατεβάσετε τα αντίστοιχα προτεινόμενα λογισμικά;</h3>
          <label><input type="checkbox"> Εγκατάσταση λογισμικού τρίτων για γραφικά και Wi-Fi</label><br>
          <label><input type="checkbox"> Λήψη και εγκατάσταση υποστήριξης για πρόσθετες μορφές πολυμέσων</label><br><br>
        </div>
      </div>
    `
  },
  {
    instruction: "Βήμα 13: Επιλογή δίσκου. Διαλέγουμε Διαγραφή δίσκου και εγκατάσταση Ubuntu. Αυτό θα μας διαγράψει όλα τα αρχεία που έχουμε στον δίσκο μας και προηγούμενο λειτουργικό σύστημα και θα εγκαταστήσει τα Ubuntu. Προσοχή! Αν δεν θέλουμε να χάσουμε κάτι πρέπει να έχουμε φροντήσει να το αποθηκεύσουμε σε κάποιο μέσω αποθήκευσης (π.χ. usb stick).",
    content: `
      <div class="ubuntu-background">
        <div class="ubuntu-window">
          <h3>Πώς θα θέλατε να εγκαταστήσετε τα Ubuntu;</h3>
          <label><input type="radio" name="disk"> Διαγραφή δίσκου και εγκατάσταση Ubuntu</label><br>
          <label><input type="radio" name="disk"> Χειροκίνητη κατάτμηση δίσκου</label><br><br>
        </div>
      </div>
    `
  },
  {
    instruction: "Βήμα 14: Δημιουργούμε τον λογαριασμό μας.",
    content: `
      <div class="ubuntu-background">
        <div class="ubuntu-window">
          <h3>Δημιουργία χρήστη:</h3>
          <input type="text" placeholder="Όνομα"><br>
          <input type="text" placeholder="Όνομα Χρήστη"><br>
          <input type="password" placeholder="Κωδικός"><br><br>
        </div>
      </div>
    `
  },
  {
    instruction: "Βήμα 15: Διαλέγουμε Europe/Athens.",
    content: `
      <div class="ubuntu-background">
        <div class="ubuntu-window">
          <h3>Τοποθεσία:</h3>
          <select style="width: 100%; padding: 8px; margin-bottom: 10px;">
            <option>Europe/Athens</option>
            <option>Europe/Berlin</option>
            <option>America/New York</option>
            <option>Asia/Tokyo</option>
            <option>Australia/Sydney</option>
          </select><br>
        </div>
      </div>
    `
  },
  {
    instruction: "Βήμα 16: Γίνεται εγκατάσταση.",
    content: `
      <div class="ubuntu-background">
        <div class="ubuntu-window">
          <h3>Installing Ubuntu...</h3>
          <div class="progress-bar">
            <div class="progress-bar-inner" id="install-bar"></div>
          </div>
        </div>
      </div>
    `,
    onload: () => {
      const bar = document.getElementById("install-bar");
      let progress = 0;
      const interval = setInterval(() => {
        if (progress >= 100) return clearInterval(interval);
        progress += 1;
        bar.style.width = progress + "%";
      }, 80);
    }
  },
  {
    instruction: "Βήμα 17: Επανεκκίνηση συστήματος. Περιμένετε.",
    content: `
      <div class="restart-background">
        <div class="restart-message">
          <h3>Αφαιρέστε το USB από τη συσκευή σας. Εκτελείται επανεκκίνηση συστήματος...</h3>
        </div>
      </div>
    `,
    onload: () => {
      setTimeout(() => goToNext(), 7000);
    }
  },
  {
    instruction: "Βήμα 18: Welcome!",
    content: `
      <div class="ubuntu-background-final">
        <div id="welcome-box" class="ubuntu-window" style="text-align: center;">
          <h1 style="font-size: 1.5em; color: black;">Welcome to Ubuntu 24.04 LTS!</h1>
          <br>
          <button class="usb-button" onclick="closeWelcome()">Κλείσιμο</button>
        </div>
      </div>
    `
}
];

let currentStep = 0;

function loadStep(stepIndex) {
  const step = steps[stepIndex];
  document.getElementById("step-content").innerHTML = step.content;
  document.getElementById("instruction").innerText = step.instruction;
  if (step.onload) step.onload();
}

function closeWelcome() {
  var box = document.getElementById("welcome-box");
  if (box) {
    box.style.display = "none";
  }
}

function goToNext() {
  currentStep++;
  if (currentStep < steps.length) {
    loadStep(currentStep);
  } else {
    document.getElementById("next-button").style.display = "none";
  }
}

document.getElementById("next-button").addEventListener("click", goToNext);
loadStep(currentStep);
