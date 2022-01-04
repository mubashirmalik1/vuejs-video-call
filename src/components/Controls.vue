<template>
<!--  <div class="controls">-->
<!--    <h2>Call overview</h2>-->
<!--    <hr />-->
<!--    <h3>Invite participants</h3>-->
<!--    <label for="urlInput">Share URL below to invite others</label>-->
<!--    <div>-->
<!--      &lt;!&ndash; Room URL to copy and share &ndash;&gt;-->
<!--      <input type="text" id="urlInput" :value="roomUrl" />-->
<!--      <button @click="copyUrl" class="teal">{{ copyButtonText }}</button>-->
<!--    </div>-->
<!--    <hr />-->
<!--    <h3>Example custom controls</h3>-->
<!--    <p>-->
<!--      You can also create your own meeting controls using daily-js methods-->
<!--    </p>-->
<!--    <div>-->
<!--      <button @click="toggleCamera">Toggle camera</button>-->
<!--      <button @click="toggleMic">Toggle mic</button>-->
<!--      <button @click="toggleScreenShare">Toggle screen share</button>-->
<!--      <button @click="expandFullscreen">Expand fullscreen</button>-->
<!--      <button @click="toggleLocalVideo">-->
<!--        {{ localVideoText }} local video-->
<!--      </button>-->
<!--      <button @click="toggleRemoteParticipants">-->
<!--        {{ remoteVideoText }} remote participants (Speaker view only)-->
<!--      </button>-->
<!--      <button @click="leaveCall">-->
<!--        Leave call-->
<!--      </button>-->
<!--    </div>-->
<!--  </div>-->
</template>


<script>
export default {
  name: "Controls",
  props: ["roomUrl", "callFrame"],
  data() {
    return {
      copyButtonText: "Copy URL",
      localVideoText: "Hide",
      remoteVideoText: "Hide",
    };
  },
  methods: {
    copyTextToClipboard(text) {
      if (!navigator.clipboard) {
        return;
      }
      navigator.clipboard.writeText(text).then(
          function() {
            console.log("Async: Copying to clipboard was successful!");
          },
          function(err) {
            console.error("Async: Could not copy text: ", err);
          }
      );
    },
    copyUrl() {
      this.copyTextToClipboard(this.roomUrl);
      this.copyButtonText = "Copied!";
    },
    toggleCamera() {
      this.callFrame.setLocalVideo(!this.callFrame.localVideo());
    },
    toggleMic() {
      this.callFrame.setLocalAudio(!this.callFrame.localAudio());
    },
    toggleScreenShare() {
      const participants = this.callFrame.participants();
      if (participants?.local?.screen) {
        this.callFrame.stopScreenShare();
      } else {
        this.callFrame.startScreenShare();
      }
    },
    expandFullscreen() {
      this.callFrame.requestFullscreen();
    },
    toggleLocalVideo() {
      const hidden = !this.callFrame.showLocalVideo();
      this.localVideoText = hidden ? "Hide" : "Show";
      this.callFrame.setShowLocalVideo(hidden);
    },
    toggleRemoteParticipants() {
      const hidden = !this.callFrame.showParticipantsBar();
      this.remoteVideoText = hidden ? "Hide" : "Show";
      this.callFrame.setShowParticipantsBar(hidden);
    },
    leaveCall() {
      this.callFrame.leave().then(() => this.callFrame.destroy());
    },
  },
};
</script>


<style scoped>
.header-container {
  background-color: var(--white);
  border-bottom: 1px solid var(--grey);
  padding: 0 24px;
}
h1 {
  font-size: 16px;
}
.wrapper {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 4px 0 4px 24px;
}
.logo {
  width: 60px;
  height: 24px;
  margin-right: 24px;
}
.divider {
  background: var(--grey);
  margin: 0 16px;
  display: block;
  height: 32px;
  width: 1px;
}
.icon {
  width: 24px;
}
a.buttonish {
  color: var(--dark-blue);
  background: var(--white);
  border: 1px solid var(--grey);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}
a.buttonish:active {
  background: var(--grey-lightest);
}
</style>