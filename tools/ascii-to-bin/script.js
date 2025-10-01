//
// ASCII -> Binary converter tool
//

document.addEventListener("DOMContentLoaded", function() {
    const usrInput = document.getElementById("asciiInput");
    const binOutput = document.getElementById("binaryOutput");
    const binCOutput = document.getElementById("binaryCommaOutput");
    const button = document.getElementById("convertBtn");
    const clButton = document.getElementById("clearBtn");

    // This is ~32kb of pure plain text.
    const inputLimit = 32767;

    // Grabbing status area, or making it if one isn't found.
    let status = document.getElementById("statusMsg");
    if (!status) {
        status = document.createElement("p");
        status.id = "statusMsg";
        status.style.color = "var(--text-secondary)";
        status.style.fontSize = "0.9rem";
        status.style.marginTop = "0.5rem";
        usrInput.insertAdjacentElement("afterend", status);
    }

    function showMessage(msg, isError = false) {
        status.textContent = msg;
        status.style.color = isError ? "tomato" : "var(--text-secondary)";
    }

    convertBtn.addEventListener("click", function () {
        const text = usrInput.value;
        let binaries = [];

        // Check if the provided ASCII is too long via a hardcoded limit.
        if (text.length > inputLimit) {
            showMessage(`❌ Input is too long! Max ${inputLimit} are allowed.`, true);
            binOutput = "";
            binCOutput = "";
            return;
        };

        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);

            if (charCode > 127) {
                showMessage(`⚠️ A non ASCII character was inputted at position '${i + 1}' with a value of '${charCode}', conversion stopped!`, true);
                binOutput.value = "";
                binCOutput.value = "";
                return;
            }

            let bin = charCode.toString(2).padStart(8, "0");
            binaries.push(bin);
            showMessage(`✅ Successfully converted ${text.length} characters.`);
        }

        // Filling out both outputs, in case anyone needs CSV-like binary.

        binaryOutput.value = binaries.join(" ");
        binaryCommaOutput.value = binaries.join(",");
    });

    clearBtn.addEventListener("click", function () {
        usrInput.value = "";
        binOutput.value = "";
        binCOutput.value = "";
    });
});