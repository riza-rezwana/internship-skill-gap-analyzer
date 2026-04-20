/*
  Warnings:

  - You are about to drop the `adminjob` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `adminjob`;

-- CreateTable
CREATE TABLE `application` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `studentId` INTEGER NOT NULL,
    `internshipId` INTEGER NOT NULL,
    `status` ENUM('APPLIED', 'REVIEWED', 'SHORTLISTED', 'REJECTED') NOT NULL DEFAULT 'APPLIED',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Application_studentId_fkey`(`studentId`),
    INDEX `Application_internshipId_fkey`(`internshipId`),
    UNIQUE INDEX `Application_studentId_internshipId_key`(`studentId`, `internshipId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `application` ADD CONSTRAINT `Application_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `application` ADD CONSTRAINT `Application_internshipId_fkey` FOREIGN KEY (`internshipId`) REFERENCES `internship`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
