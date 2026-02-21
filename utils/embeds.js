import { EmbedBuilder } from "discord.js";

export function baseEmbed(title, description) {
  return new EmbedBuilder()
    .setColor("#7c3aed")
    .setTitle(`💎 ${title}`)
    .setDescription(description)
    .setFooter({ text: "Luxora PS99" })
    .setTimestamp();
}

export function successEmbed(title, description) {
  return new EmbedBuilder()
    .setColor("#22c55e")
    .setTitle(`✅ ${title}`)
    .setDescription(description)
    .setFooter({ text: "Luxora PS99" })
    .setTimestamp();
}

export function errorEmbed(title, description) {
  return new EmbedBuilder()
    .setColor("#ef4444")
    .setTitle(`❌ ${title}`)
    .setDescription(description)
    .setFooter({ text: "Luxora PS99" })
    .setTimestamp();
}

export function gameResultEmbed(game, resultText) {
  return new EmbedBuilder()
    .setColor("#3b82f6")
    .setTitle(`🎰 ${game}`)
    .setDescription(resultText)
    .setFooter({ text: "7% House Edge Applied" })
    .setTimestamp();
}