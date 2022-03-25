FROM CyberMafiya/Cyber-Mafiya:fullcontrol

RUN git clone https://github.com/CyberMafiya/Cyber-Mafiya /root/CyberMafiaWhatsappBot
WORKDIR /root/CyberMafiaWhatsappBot/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "sew.js"]
