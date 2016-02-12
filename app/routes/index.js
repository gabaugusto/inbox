import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        // return this.store.findAll("message");
        return [
            {
              id: 1,
              avatar: "https://lh4.googleusercontent.com/-GXmmnYTuWkg/AAAAAAAAAAI/AAAAAAAAAAA/oK6DEDS7grM/w56-h56/photo.jpg",
              senderName: "Sathish kumar Thangaraj",
              subject: "FW: Jobs to Apply for",
              content: "The only thing I can think to do is trigger an event when the window resizes and dynamically set a new fixed width on text-div, but this just feels inelegant, especially considering padding and other neighboring artifacts I'd have to subtract out to get a proper width.",
              hasAttachements: true,
              hasPictures: true,
              attachments: [
                {
                  fileName: "Design document v1.0",
                  fileType: "document",
                  ext: ".docx",
                  url: "https://google.com"
                },
                {
                  fileName: "Phone Bill",
                  fileType: "document",
                  ext: ".xlsx",
                  url: "https://google.com"
                },
                {
                  fileName: "EL245675326US",
                  fileType: "document",
                  ext: ".pdf",
                  url: "https://google.com"
                },
                {
                  fileName: "Sathish",
                  fileType: "image",
                  ext: ".jpeg",
                  url: "https://google.com",
                  clipSrc: "https://mail.google.com/mail/u/0?ui=2&ik=07220d603d&attid=0.1&th=151695cc6bb6d4fc&view=fimg&disp=thd&attbid=ANGjdJ8gIjGGb-2uMAzz3zZ5ajYGXWO4LIsHafZvx7RZK37AO6b8qC3hfRyCRrbvAEQDUolyLmMQqyouSCROGuMX8NunKLC_3LeBnRXorsnV9R0tbXCORRg5n5A8KOE&ats=2524608000000&sz=w132-h88-n-nu"
                },
                {
                  fileName: "Salim | Maskara | Tamil Movie Song",
                  fileType: "video",
                  ext: ".mpeg",
                  url: "https://google.com",
                  clipSrc: "https://ci6.googleusercontent.com/proxy/zhVGOpL5idNAKq_vbCRCjdgAZy3oaX_Ju5rwNPC_K1SRIwGUQlpPpaco-1T-NepnzdSXxNR8Bh_D7p4qWE7oomy0JKugJA=nu"
                }
              ]
            },
            {
              id: 2,
              avatar: "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_a_56.png",
              senderName: "Alex",
              subject: "Saregama Tamil",
              content: "Watch the peppy love song Mascara Pottu sung by Vijay Antony & Supriya Joshi from the action cum romantic flick Salim.",
              hasVideos: true,
              attachments: []
            },
            {
              id: 3,
              avatar: "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_g_56.png",
              senderName: "Google",
              subject: "New sign-in from Chrome on Windows",
              content: "Hi Sathish kumar, Your Google Account sathishlxg@gmail.com was",
              attachments: [{
                  fileName: "Sathish",
                  fileType: "image",
                  ext: ".jpeg",
                  url: "https://google.com",
                  clipSrc: "https://mail.google.com/mail/u/0?ui=2&ik=07220d603d&attid=0.1&th=151695cc6bb6d4fc&view=fimg&disp=thd&attbid=ANGjdJ8gIjGGb-2uMAzz3zZ5ajYGXWO4LIsHafZvx7RZK37AO6b8qC3hfRyCRrbvAEQDUolyLmMQqyouSCROGuMX8NunKLC_3LeBnRXorsnV9R0tbXCORRg5n5A8KOE&ats=2524608000000&sz=w132-h88-n-nu"
                }]
            },
            {
              id: 4,
              avatar: "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_m_56.png",
              senderName: "Max",
              subject: "Buffalo boy",
              content: "Once in your life time you will truly come across someone",
              hasAttachements: true,
              attachments: [
                {
                  fileName: "Design document v1.0",
                  fileType: "document",
                  ext: ".docx",
                  url: "https://google.com"
                },
                {
                  fileName: "Phone Bill",
                  fileType: "document",
                  ext: ".xlsx",
                  url: "https://google.com"
                },
                {
                  fileName: "EL245675326US",
                  fileType: "document",
                  ext: ".pdf",
                  url: "https://google.com"
                },
                {
                  fileName: "Design document v1.0",
                  fileType: "document",
                  ext: ".docx",
                  url: "https://google.com"
                },
                {
                  fileName: "Phone Bill",
                  fileType: "document",
                  ext: ".xlsx",
                  url: "https://google.com"
                },
                {
                  fileName: "EL245675326US",
                  fileType: "document",
                  ext: ".pdf",
                  url: "https://google.com"
                },
                {
                  fileName: "Design document v1.0",
                  fileType: "document",
                  ext: ".docx",
                  url: "https://google.com"
                },
                {
                  fileName: "Phone Bill",
                  fileType: "document",
                  ext: ".xlsx",
                  url: "https://google.com"
                },
                {
                  fileName: "EL245675326US",
                  fileType: "document",
                  ext: ".pdf",
                  url: "https://google.com"
                }
              ]
            }
        ];
    }
});