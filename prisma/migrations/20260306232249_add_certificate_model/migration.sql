-- CreateTable
CREATE TABLE `Certificate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `studentName` VARCHAR(191) NOT NULL,
    `companyName` VARCHAR(191) NOT NULL,
    `certificateFile` VARCHAR(191) NOT NULL,
    `durationMonths` INTEGER NOT NULL,
    `experienceRating` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
