//
// ASCII -> bin converter (pure JS)
//

document.addEventListener("DOMContentLoaded", function () {
  const usrInput = document.getElementById("asciiInput");
  const binOutput = document.getElementById("binaryOutput");
  const binCOutput = document.getElementById("binaryCommaOutput");
  const convertBtn = document.getElementById("convertBtn");
  const clearBtn = document.getElementById("clearBtn");

  // optional quick-action / copy buttons (may not exist)
  const pasteBtn = document.getElementById("pasteBtn");
  const copyBinBtn = document.getElementById("copyBinBtn");
  const copyCommaBtn = document.getElementById("copyCommaBtn");

  const inputLimit = 8192;
  const safeSetValue = (el, val) => { if (el) el.value = val; };

  // Create or reuse status message element (insert robustly)
  let status = document.getElementById("statusMsg");
  if (!status) {
    status = document.createElement("p");
    status.id = "statusMsg";
    status.setAttribute("aria-live", "polite");
    status.style.marginTop = "0.5rem";
    status.style.fontSize = "0.95rem";

    // Prefer inserting after .input-wrapper, then append to .tool-content, else body
    try {
      const inputWrapper = usrInput ? usrInput.closest(".input-wrapper") : null;
      const toolContent = usrInput ? usrInput.closest(".tool-content") : null;

      if (inputWrapper && inputWrapper.parentNode) {
        inputWrapper.parentNode.insertBefore(status, inputWrapper.nextSibling);
      } else if (toolContent && toolContent.appendChild) {
        toolContent.appendChild(status);
      } else {
        document.body.appendChild(status);
      }
    } catch (err) {
      // last-resort
      document.body.appendChild(status);
    }
  }

  // Manage status with auto-clear for non-error messages
  let statusTimeout = null;
  function showMessage(msg, isError = false) {
    if (!status) return;
    status.textContent = msg;
    status.style.color = isError ? "tomato" : "var(--text-secondary)";
    if (statusTimeout) {
      clearTimeout(statusTimeout);
      statusTimeout = null;
    }
    if (!isError && msg) {
      statusTimeout = setTimeout(() => { status.textContent = ""; }, 2500);
    }
  }

  // Convert handler
  if (convertBtn) {
    convertBtn.addEventListener("click", function () {
      const text = (usrInput && usrInput.value) || "";
      if (!text) {
        showMessage("Type some text to convert.");
        safeSetValue(binOutput, "");
        safeSetValue(binCOutput, "");
        return;
      }

      if (text.length > inputLimit) {
        showMessage(`❌ Input too long — max ${inputLimit} characters.`, true);
        safeSetValue(binOutput, "");
        safeSetValue(binCOutput, "");
        return;
      }

      const binaries = [];
      for (let i = 0; i < text.length; i++) {
        const code = text.charCodeAt(i);
        if (code > 127) {
          showMessage(`⚠️ Non-ASCII character at position ${i + 1} (code ${code}). Conversion aborted.`, true);
          safeSetValue(binOutput, "");
          safeSetValue(binCOutput, "");
          return;
        }
        binaries.push(code.toString(2).padStart(8, "0"));
      }

      safeSetValue(binOutput, binaries.join(" "));
      safeSetValue(binCOutput, binaries.join(", "));
      showMessage(`✅ Converted ${text.length} character(s).`);
    });
  }

  // Clear handler
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      if (usrInput) usrInput.value = "";
      safeSetValue(binOutput, "");
      safeSetValue(binCOutput, "");
      showMessage("");
    });
  }

  // Paste quick-action (inside input)
  if (pasteBtn) {
    pasteBtn.addEventListener("click", async function () {
      if (!navigator.clipboard || !navigator.clipboard.readText) {
        showMessage("Clipboard read not available in this browser.", true);
        return;
      }
      try {
        const txt = await navigator.clipboard.readText();
        if (usrInput) {
          usrInput.value = txt;
          usrInput.focus();
        }
        showMessage("📥 Pasted clipboard into input.");
      } catch (err) {
        console.error("Clipboard read failed:", err);
        showMessage("Failed to read clipboard (permission denied?).", true);
      }
    });
  }

  // Copy space-separated binary
  if (copyBinBtn) {
    copyBinBtn.addEventListener("click", async function () {
      const text = (binOutput && binOutput.value) || "";
      if (!navigator.clipboard || !navigator.clipboard.writeText) {
        showMessage("Clipboard write not available in this browser.", true);
        return;
      }
      try {
        await navigator.clipboard.writeText(text);
        showMessage("Copied space-separated binary to clipboard.");
      } catch (err) {
        console.error("Clipboard write failed:", err);
        showMessage("Unable to copy output.", true);
      }
    });
  }

  // Copy comma-separated binary
  if (copyCommaBtn) {
    copyCommaBtn.addEventListener("click", async function () {
      const text = (binCOutput && binCOutput.value) || "";
      if (!navigator.clipboard || !navigator.clipboard.writeText) {
        showMessage("Clipboard write not available in this browser.", true);
        return;
      }
      try {
        await navigator.clipboard.writeText(text);
        showMessage("Copied comma-separated binary to clipboard.");
      } catch (err) {
        console.error("Clipboard write failed:", err);
        showMessage("Unable to copy output.", true);
      }
    });
  }
});
